import React from 'react';
import log from 'loglevel';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import HeaderBar from 'd2-ui/lib/header-bar/HeaderBar.component';
import Client from './Client.js';


export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
    },

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    },


    ///////////////////////////////////////// SIDEBAR //////////////////////////////////////////////////////////////////

    getInitialState: function () {
        return this.state = {
            value: 'YEAR',
            startDate: '',
            endDate: '',
            url: ''
        };

    },

    updateButton: function () {
        var style = {
            margin: 12
        };
        return <div><RaisedButton label="Update" secondary={true} style={style} onClick={() => this.updateURL()}/></div>;
    },

    updateURL: function(){
        let tempUrl = "http://localhost:8080/api/dataStatistics?startDate="+this.state.startDate+"&endDate="+this.state.endDate+"&interval=" + this.state.value;
        this.setState({url:tempUrl});
        console.log(tempUrl);

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

    checkBoxes: function(){
        var styles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 16,
            }
        };

        return (<div style={styles.block}>
                <h3>Favorite views</h3>
                <Checkbox
                    label="Map"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Chart"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Report table"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Event report"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Event chart"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Dashboard"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Indicator"
                    style={styles.checkbox}
                />
                <h3>Saved</h3>
                <Checkbox
                    label="Maps"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Charts"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Report tables"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Event reports"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Event charts"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Dashboards"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Indicators"
                    style={styles.checkbox}
                />
            </div>


        );

    },


    ///////////////////////////////////////// ENDSIDEBAR //////////////////////////////////////////////////////////////////


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
                this.updateButton(),
                this.DatePicker(),
                this.dropdownMenu(),
                this.checkBoxes()

                )}
                <div className="main-content">
                    {console.log("kjører render og kaller client med: " + this.state.url)}
                    <Client source={this.state.url}/>
                </div>
            </div>
        );
    }
});



