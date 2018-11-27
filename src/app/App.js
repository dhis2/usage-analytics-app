import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import HeaderBar from '../header-bar/HeaderBar.component';
import { config } from 'd2/lib/d2';
import Client from './Client.js';
import TopMenu from './Topmenu.js';
import MyRawTheme from '../colortheme';


const buttonstyle = {
    marginLeft: 10,
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderRight: 1,
    borderRightStyle: 'solid',
    borderColor: '#dadada',
    backgroundColor: '#FFFFFF',
    width: 190
};

let startDate = new Date();
startDate.setMonth(startDate.getMonth() - 4);
let endDate = new Date();
let startString = '';
let endString = '';
let update = true;
let interval = "WEEK";

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
            url: config.baseUrl + "/dataStatistics?startDate=" + this.formatDate(startDate) + "&endDate=" + this.formatDate(endDate) + "&interval=WEEK",
            interval: 'WEEK',
            category: 'Favorite views'
        };
    },
    updateButton: function () {
        var style = {
            marginTop: 15,
            marginRight: 10,
            marginLeft: 10,
            display: 'block',
            float: 'left'
        };
        return <div><RaisedButton label="Update" className="raised-button" primary={true} style={style}
                                  onClick={() => this.updateURL()}/></div>;
    },

    updateURL: function () {
        startString = this.formatDate(startDate);
        endString = this.formatDate(endDate);
        let tempUrl = config.baseUrl + "/dataStatistics?startDate=" + startString + "&endDate=" + endString + "&interval=" + interval/*this.state.interval*/;
        update = true;
        this.setState({url: tempUrl});
    },

    DatePicker: function () {
        var style = {
            label: {
                display: 'block',
                fontFamily: 'Roboto, sans-serif',
                fontSize: 19

            },
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 20,
            datepicker: {
                textFieldStyle: 'yyyy-mm-dd'
            }

        };
        return ( <div style={style}>
            <label style={style.label} htmlFor="start"><b>Start date:</b></label>
            <DatePicker id="start" defaultDate={startDate} formatDate={this.formatDate} mode="landscape"
                        onChange={(event, value) => startDate = value}/>
            <label style={style.label} htmlFor="end"><b>End date:</b></label>
            <DatePicker id="end" defaultDate={endDate} formatDate={this.formatDate} mode="landscape"
                        onChange={(event, value) =>  endDate = value}/>
        </div>);
    },

    formatDate(date){

        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },

    dropdownIntervalMenu: function () {
        var style = {
            label: {
                display: 'block',
                fontFamily: 'Roboto, sans-serif',
                marginTop: 10,
                marginLeft: 10,
                fontSize: 19
            },
            menu: {
                width: 116
            }

        };
        return (<div>
            <label style={style.label} htmlFor="intervaldrop"><b>Interval:</b></label>
            <DropDownMenu id="intervaldrop" autoWidth={false} value={interval/*this.state.interval*/} style={buttonstyle}
                          onChange={(event, index, value) => interval = value/*this.setState({interval: value})*/}>
                <MenuItem value={'DAY'} primaryText="DAY"/>
                <MenuItem value={'WEEK'} primaryText="WEEK"/>
                <MenuItem value={'MONTH'} primaryText="MONTH"/>
                <MenuItem value={'YEAR'} primaryText="YEAR"/>
            </DropDownMenu></div>);

    },

    dropdownCategoryMenu: function () {
        var style = {
            label: {
                display: 'block',
                fontFamily: 'Roboto, sans-serif',
                marginTop: 10,
                marginLeft: 10,
                fontSize: 19,
            }, icon: {
                color: '#000000'
            }
        };
        return (<div>
            <label style={style.label} htmlFor="Categorydrop"><b>Category:</b></label>
            <DropDownMenu id="Categorydrop" autoWidth={false} style={buttonstyle} iconStyle={style.icon}
                          value={this.state.category}
                          onChange={(event, index, value) => this.setState({category: value})}>
                <MenuItem value={'Favorite views'} primaryText="FAVORITE VIEWS"/>
                <MenuItem value={'Favorite saved'} primaryText="FAVORITES"/>
                <MenuItem value={'Users'} primaryText="USERS"/>
                <MenuItem value={'Top favorites'} primaryText="TOP FAVORITES"/>
                <MenuItem value={'Data values'} primaryText="DATA VALUES"/>
            </DropDownMenu></div>);

    },

    title: function () {
        var style = {
            h1: {
                fontFamily: 'Roboto, sans-serif',
                textAlign: 'center',
                marginBottom: 30,
                fontSize: 21,
                fontWeight: "normal"
            }
        };
        return (
            <h1 style={style.h1}>Usage Analytics</h1>
        )
    },

    render()
    {
        var style = {
            sidebar: {
                backgroundColor: '#f3f3f3',
                overflowY: 'auto',
                overflowX: 'hidden',
                width: 256
            }
        };

        return (
            <div className="app-wrapper">
                <HeaderBar />
                {React.createElement(
                    'div',
                    {style: style.sidebar, className: 'left-bar'},
                    this.title(),
                    this.DatePicker(),
                    this.dropdownIntervalMenu(),
                    this.dropdownCategoryMenu(),
                    this.updateButton()
                )}
                <div className="main-content">
                    {this.state.category == 'Top favorites' ? <TopMenu /> : <Client source={this.state.url} category={this.state.category} updatepage={update}/>}
                    {update = false}
                </div>
            </div>
        );
    }
});