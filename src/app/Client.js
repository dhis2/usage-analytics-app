import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

import Handler from './Handler';
import Table from './Table';

let category = '';
let load = false;
let dataTemp = '';
let error = '';

const style = {
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

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, error: undefined};
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.updatepage;
    },


    componentWillReceiveProps: function (nextprops) {
        console.log("CLIENT: kom inn her i willrecieve" + nextprops.category);
        category = nextprops.category;
        var dataHasChanged = this.props.source !== nextprops.source;
        if (dataHasChanged) {
            this.retrieveData(nextprops.source);
        }
    },

    componentWillMount: function(){
        category = this.props.category;
    },
    retrieveData: function (url) {
        console.log("skal hente ut: " + url);
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

    getStartText: function() {
        return (
            <div>
              <span style={style.spanstyle}>This app creates statistic reports of usage within the DHIS2 system. It generates a chart and a table containing chosen data.
                                Start by selecting the dates and choose your preferred interval and category. Click the update button to generate the report.
              </span>
            </div>);
    },
    getErrorText: function() {
       return <div style={style.errdivstyle}> <span style={style.errspanstyle}><b>Something went wrong!</b> {this.state.error}</span></div>;
    },

    render() {
        console.log("Client:render "+ category);

        if (!dataTemp && (!error)) {
            if(!load) {
                return this.getStartText();
            }else { return <CircularProgress size={1.5} style={style.circular}/>}
        }
        else if(error){
            return this.getErrorText();
        }
        else if(category == 'Top favorites'){
            console.log("inne i if i client");
            return  <Table data={this.state.data} category={category}/>
        }
        else {
            return (
                    <Handler data={this.state.data} category={category}/>
            );
        }

    }
});
