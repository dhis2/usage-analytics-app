/**
 * Created by JulieHillRoa on 14.03.2016.
 */

import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

import Table from './Table';
import Chart from './Chart';


let category = '';
let load = false;
let dataTemp = '';
let error = '';

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, error: undefined};
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.updatepage;
    },


    componentWillReceiveProps: function (nextprops) {
        category = nextprops.category;
        var dataHasChanged = this.props.source !== nextprops.source;
        if (dataHasChanged) {
            this.retrieveData(nextprops.source);
        }
    },
    retrieveData: function (url) {
        load = true;
        dataTemp = undefined;
        error = undefined;
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                dataTemp = data;
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                let code;
                if(xhr.status == 409){
                    code = 'Start date or end date is invalid';
                }else code = xhr.status + ", " + xhr.statusText;
                error = code;
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
                paddingLeft:10,
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

        if (!dataTemp && (!error)) {
            if(!load) {
                return (
                    <div>
                            <span style={style.spanstyle}>This app creates statistic reports of usage within the DHIS2 system. It generates a chart and a table of chosen data.
                                Start by selecting start date and end date and choose your preferred interval and category. Click the update button to generate the report.
                                When "Favorite Views" is selected, you can use the radio buttons to select either total or every value except total.
                            </span>
                    </div>);
            }else { return <CircularProgress size={1.5} style={style.circular}/>}

        }
        else if(error){
            return<div style={style.errdivstyle}> <span style={style.errspanstyle}><b>Something went wrong!</b> {this.state.error}</span></div>;
        }
        else {
            return (
                <div>
                    <Chart data={this.state.data} category={category}/>
                    <Table data={this.state.data} category={category}/>
                </div>
            );
        }

    }
});
