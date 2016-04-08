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

let startDate = new Date();
startDate.setFullYear(startDate.getFullYear() -1);
let endDate = new Date();
let startString = '';
let endString = '';
let interval = 'DAY';
let category = 'Favorite Views';


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
        return this.state = {
            url: ''
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
        startString = this.formatDate(startDate);
        endString = this.formatDate(endDate);

        let tempUrl = "http://localhost:8080/api/dataStatistics?startDate="+startString+"&endDate="+endString+"&interval=" + interval;
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
            <DatePicker id="start" defaultDate={startDate}   formatDate={this.formatDate} mode="landscape" onChange={(event, value) => startDate = value} />
            <label style={style.label} htmlFor="end"><b>End date:</b></label>
            <DatePicker id="end" defaultDate={endDate}  formatDate={this.formatDate} mode="landscape" onChange={(event, value) =>  endDate = value}/>
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
            <DropDownMenu id="intervaldrop" value={interval} style={buttonstyle} onChange={(event, index, value) => interval = value}>
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
            <DropDownMenu id="Categorydrop" style={buttonstyle} value={category} onChange={(event, index, value) => category= value}>
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
                        <Client source={this.state.url} category={category}/>
                    </div>
            </div>
        );
    }
});



