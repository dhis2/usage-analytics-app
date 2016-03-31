/**
 * Created by JulieHillRoa on 14.03.2016.
 */

import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

import Table from './Table';
import Chart from './Chart';


export default React.createClass({
    getInitialState: function () {
        return {data: undefined,variables: undefined, error: undefined, load: false};
    },

    componentWillMount: function () {
        if (this.props.source !== "") {
            this.retrieveData(this.props.source);
        }
    },

    componentWillReceiveProps: function (nextprops) {
        this.setState({variables: nextprops.variables});
        var dataHasChanged = this.props.source !== nextprops.source;
        if (dataHasChanged) {
            this.retrieveData(nextprops.source);
        }
    },
    retrieveData: function (url) {
        this.setState({load:true});
        this.setState({data: undefined});
        this.setState({error:undefined});
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                let roundData = data.map((result) => {
                    for (let x in result) {
                        result[x] = Math.round(result[x] * 100) / 100;
                    }
                    return result;
                });
                this.setState({data: roundData});
            }.bind(this),
            error: function (xhr, status, err) {
                let code;
                if(xhr.status == 409){
                    code = 'Start date or end date is invalid';
                }else code = xhr.status + ", " + xhr.statusText;
                this.setState({error: code})
            }.bind(this)
        });

    },

    render() {
        var style = {
            spanstyle:{
                backgroundColor: '#f3f3f3',
                paddingTop:15,
                paddingBottom:15,
                paddingLeft:15,
                paddingRight:15,
                maxWidth: 600,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'normal',

                color:'#000000',
                fontSize:18,
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',

            },
            errdivstyle: {
                background: '#f2dede',
                minHeight: 50,
                paddingTop:15
            },
            errspanstyle:{
                color:'#a94442',
                fontSize:20,
                textAlign:'center',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'normal'

            },
            circular:{
                display:'block',
                marginLeft:'auto',
                marginRight:'auto'
            }
        };

        if (!this.state.data && (!this.state.error)) {
            if(!this.state.load) {
                return (
                    <div>
                        <span style={style.spanstyle}>This app creates statistical reports of usage within the DHIS2 system. This app will generate a chart and a table of chosen data.
                            Start by selecting start date and end date and choose your preferred interval. Click the update button to generate the report.
                            You can also choose witch variables you want to compare by checking/unchecking the boxes in the menu.
                        </span>
                    </div>);
            }else {return <CircularProgress size={1.5} style={style.circular}/>}
        }
        else if(this.state.error){
            return<div style={style.errdivstyle}> <span style={style.errspanstyle}><b>Something went wrong!</b> {this.state.error}</span></div>;
        }
        else {
            return (
                <div>
                    <Chart data={this.state.data} variables={this.state.variables}/>
                    <Table data={this.state.data} variables={this.state.variables}/>
                </div>
            );
        }

    }
});
