import React from 'react';
import log from 'loglevel';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import HeaderBar from 'd2-ui/lib/header-bar/HeaderBar.component';
import Client from './Client.js';
import MyRawTheme from '../colortheme';



const buttonstyle = {
    marginLeft: 10,
    borderBottom: 1,
    borderBottomStyle:'solid',
    borderRight: 1,
    borderRightStyle:'solid',
    borderColor: '#dadada',
    backgroundColor:'#FFFFFF'
};

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object
    },

    childContextTypes: {
        d2: React.PropTypes.object,
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            d2: this.props.d2,
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
        };
    },

    getInitialState: function () {
        let minDate = new Date();
        let maxDate = new Date();
            minDate = (minDate.getFullYear()-1) + "-" + (minDate.getMonth() + 1) + "-" + minDate.getDate();
            maxDate = this.formatDate(maxDate);
        //all variables that can be retrieved from server. Extend if server is changed
       /* var allVarables = ["Active users","Map views","Chart views",
            "Report table views","Event report views","Event chart views",
            "Dashboard views","Indicators views","Total views","Average views","Saved maps",
            "Saved charts","Saved report tables","Saved event report",
            "Saved event charts","Saved dashboards","Saved indicators",
            "Total users"];*/
        return this.state = {
            interval: 'DAY',
            startDate: minDate,
            endDate: maxDate,
            url: '',
            category:'Favorite Views',
            //firstRender:true
            //showVariables: allVarables
        };
    },
    updateButton: function () {
        var style = {
            marginTop:15,
            marginRight: 10,
            display:'block',
            float:'right'
        };
        return <div><RaisedButton label="Update" primary={true} style={style} onClick={() => this.updateURL()}/></div>;
    },

    updateURL: function(){
        let tempUrl = "http://localhost:8080/api/dataStatistics?startDate="+this.state.startDate+"&endDate="+this.state.endDate+"&interval=" + this.state.interval;
        this.setState({url:tempUrl});
    },

    DatePicker: function () {
        var style = {
            label:{
                display:'block',
                fontFamily: 'Roboto, sans-serif',
                fontSize: 19

            },
            marginTop:10,
            marginLeft: 10,
            marginBottom:20,
            datepicker:{
                textFieldStyle:'yyyy-mm-dd'
            }

        };
        return ( <div style={style}>
            <label style={style.label} htmlFor="start"><b>Start date:</b></label>
            <DatePicker id="start" defaultValue={this.state.startDate}  mode="landscape" onChange={(event, value) => this.setState({startDate: this.formatDate(value)})} />
            <label style={style.label} htmlFor="end"><b>End date:</b></label>
            <DatePicker id="end" defaultValue={this.state.endDate} mode="landscape" onChange={(event, value) => this.setState({endDate: this.formatDate(value)})}/>
        </div>);
    },

    formatDate(date){
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },

    dropdownIntervalMenu: function () {
        var style = {
            label:{
                display:'block',
                fontFamily: 'Roboto, sans-serif',
                marginTop:10,
                marginLeft: 10,
                fontSize: 19
            }

        };
        return (<div>
            <label style={style.label} htmlFor="intervaldrop"><b>Interval:</b></label>
            <DropDownMenu id="intervaldrop" value={this.state.interval} style={buttonstyle} onChange={(event, index, value) => this.setState({interval: value})}>
                <MenuItem value={'DAY'} primaryText="DAY"/>
                <MenuItem value={'WEEK'} primaryText="WEEK"/>
                <MenuItem value={'MONTH'} primaryText="MONTH"/>
                <MenuItem value={'YEAR'} primaryText="YEAR"/>
            </DropDownMenu></div>);

    },

    dropdownCategoryMenu: function () {
        var style = {
            label:{
                display:'block',
                fontFamily: 'Roboto, sans-serif',
                marginTop:10,
                marginLeft: 10,
                fontSize: 19,
            }
        };
        return (<div>
            <label style={style.label} htmlFor="Categorydrop"><b>Category:</b></label>
            <DropDownMenu id="Categorydrop" style={buttonstyle} value={this.state.category} onChange={(event, index, value) => this.setState({category: value})}>
                <MenuItem value={'Favorite Views'} primaryText="FAVORITE VIEWS"/>
                <MenuItem value={'Favorite saved'} primaryText="FAVORITE SAVED"/>
                <MenuItem value={'Users'} primaryText="USERS"/>
            </DropDownMenu></div>);

    },

    render()
    {
        var style = {
            sidebar: {
                backgroundColor: '#f3f3f3',
                overflowY: 'auto',
                width: 256
            }
        };
        return (
            <div className="app-wrapper">
                <HeaderBar />
                {React.createElement(
                    'div',
                    {style: style.sidebar, className: 'left-bar'},
                        this.DatePicker(),
                        this.dropdownIntervalMenu(),
                        this.dropdownCategoryMenu(),
                        this.updateButton()
                    )}
                    <div className="main-content">
                        <Client source={this.state.url} variables={this.state.category}/>
                    </div>
            </div>
        );
    }
});



