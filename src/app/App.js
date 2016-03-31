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


export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            d2: this.props.d2,
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
        };
    },

    getInitialState: function () {
        //all variables that can be retrieved from server. Extend if server is changed
        var allVarables = ["Active users","Map views","Chart views",
            "Report table views","Event report views","Event chart views",
            "Dashboard views","Indicators views","Total views","Average views","Saved maps",
            "Saved charts","Saved report tables","Saved event report",
            "Saved event charts","Saved dashboards","Saved indicators",
            "Total users"];
        return this.state = {
            value: 'YEAR',
            startDate: '',
            endDate: '',
            url: '',
            showVariables: allVarables
        };
    },
    updateButton: function () {
        var style = {
            margin: 12,
            display:'block',
            float:'right'

        };
        return <div><RaisedButton label="Update" primary={true} style={style} onClick={() => this.updateURL()}/></div>;
    },

    updateURL: function(){
        let tempUrl = "http://localhost:8080/api/dataStatistics?startDate="+this.state.startDate+"&endDate="+this.state.endDate+"&interval=" + this.state.value;
        this.setState({url:tempUrl});
    },

    DatePicker: function () {
        return ( <div>
            <DatePicker hintText="Start date" mode="landscape" onChange={(event, value) => this.setState({startDate: this.formatDate(value)})} />
            <DatePicker hintText="End date" mode="landscape" onChange={(event, value) => this.setState({endDate: this.formatDate(value)})}/>
        </div>);
    },

    formatDate(date){
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },


    dropdownMenu: function () {
        return (
            <DropDownMenu value={this.state.value} onChange={(event, index, value) => this.setState({value: value})}>
                <MenuItem value={'DAY'} primaryText="DAY"/>
                <MenuItem value={'WEEK'} primaryText="WEEK"/>
                <MenuItem value={'MONTH'} primaryText="MONTH"/>
                <MenuItem value={'YEAR'} primaryText="YEAR"/>
            </DropDownMenu>);

    },

    onChangeCheckbox: function(box){
        if(this.state.showVariables.indexOf(box) > -1)
            this.setState({showVariables: this.state.showVariables.filter((value,index) => value !== box ) });
        else this.setState({showVariables: this.state.showVariables.concat(box)});
    },

    isChecked: function(box){
        return this.state.showVariables.indexOf(box) > -1;
    },

    checkBoxes: function(){
        var styles = {
            block: {
                maxWidth: 256,
            },
            checkbox: {
                marginBottom: 16,
            }
        };
        return (
            <div style={styles.block}>
                <table>
                    <tbody>
                    <tr>
                        <td><h4>Favorite views</h4>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Map"
                                checked={this.isChecked("Map views")}
                                onCheck={()=>this.onChangeCheckbox("Map views")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Chart"
                                defaultChecked={this.isChecked("Chart views")}
                                onCheck={()=>this.onChangeCheckbox("Chart views")}
                                style={styles.checkbox}
                            />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Indicator"
                                defaultChecked={this.isChecked("Indicators views")}
                                onCheck={()=>this.onChangeCheckbox("Indicators views")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Dashboard"
                                defaultChecked={this.isChecked("Dashboard views")}
                                onCheck={()=>this.onChangeCheckbox("Dashboard views")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Event chart"
                                defaultChecked={this.isChecked("Event chart views")}
                                onCheck={()=>this.onChangeCheckbox("Event chart views")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Report table"
                                defaultChecked={this.isChecked("Report table views")}
                                onCheck={()=>this.onChangeCheckbox("Report table views")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Event report"
                                defaultChecked={this.isChecked("Event report views")}
                                onCheck={()=>this.onChangeCheckbox("Event report views")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h4>Saved</h4></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Map"
                                defaultChecked={this.isChecked("Saved maps")}
                                onCheck={()=>this.onChangeCheckbox("Saved maps")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Chart"
                                defaultChecked={this.isChecked("Saved charts")}
                                onCheck={()=>this.onChangeCheckbox("Saved charts")}
                                style={styles.checkbox}
                            />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Indicator"
                                defaultChecked={this.isChecked("Saved indicators")}
                                onCheck={()=>this.onChangeCheckbox("Saved indicators")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Dashboard"
                                defaultChecked={this.isChecked("Saved dashboards")}
                                onCheck={()=>this.onChangeCheckbox("Saved dashboards")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Event chart"
                                defaultChecked={this.isChecked("Saved event charts")}
                                onCheck={()=>this.onChangeCheckbox("Saved event charts")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Report table"
                                defaultChecked={this.isChecked("Saved report tables")}
                                onCheck={()=>this.onChangeCheckbox("Saved report tables")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td> <Checkbox
                            label="Event report"
                            defaultChecked={this.isChecked("Saved event report")}
                            onCheck={()=>this.onChangeCheckbox("Saved event report")}
                            style={styles.checkbox}
                        /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h4>other</h4></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Active users"
                                defaultChecked={this.isChecked("Active users")}
                                onCheck={()=>this.onChangeCheckbox("Active users")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Average views"
                                defaultChecked={this.isChecked("Average views")}
                                onCheck={()=>this.onChangeCheckbox("Average views")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                label="Total views"
                                defaultChecked={this.isChecked("Total views")}
                                onCheck={()=>this.onChangeCheckbox("Total views")}
                                style={styles.checkbox}
                            />
                        </td>
                        <td>
                            <Checkbox
                                label="Total users"
                                defaultChecked={this.isChecked("Total users")}
                                onCheck={()=>this.onChangeCheckbox("Total users")}
                                style={styles.checkbox}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    },
    render()
    {
        var style = {
            sidebar: {
                backgroundColor: '#f3f3f3',
                overflowY: 'auto',
                width: 256,
            },
            inner:{padding: 5}
        };
        return (
            <div className="app-wrapper">
                <HeaderBar />
                {React.createElement(
                    'div',
                    {style: style.sidebar, className: 'left-bar'},
                        this.DatePicker(),
                        this.updateButton(),
                        this.dropdownMenu(),
                        this.checkBoxes()
                    )}
                <div className="main-content">
                    <Client source={this.state.url} variables={this.state.showVariables}/>
                </div>
            </div>
        );
    }
});



