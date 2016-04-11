/**
 * Created by yrjanaff on 29.03.2016.
 */

import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default React.createClass({

    favoreiteViewsOnly: function (data) {
        let arr = [];
        data.filter((val) => {
            return (arr.push({
                Mapview: val.mapViews,
                Chartview: val.chartViews,
                ReportTableview: val.reportTablesViews,
                EventReportview: val.eventReportViews,
                EventChartview: val.eventChartViews,
                Dashboardview: val.dashboardViews,
                Indicatorsview: val.indicatorsViews,
                Totalview: val.totalViews,
                Averageview: val.averageViews
            }))
        });
        return arr;
    },
    favoreiteSavedOnly: function (data) {
        let arr = [];
        data.filter((val) => {
            return (arr.push({
                Mapssaved: val.savedMaps,
                Chartssaved: val.savedCharts,
                ReportTablessaved: val.savedReportTables,
                EventReportssaved: val.savedEventReports,
                EventChartssaved: val.savedEventCharts,
                Dashboardssaved: val.savedDashboards,
                Indicatorssaved: val.savedIndicators,
            }))
        });
        return arr;
    },
    usersOnly: function (data) {
        let arr = [];
        data.filter((val) => {
            return (arr.push({Activeusers: val.activeUsers, Totalusers: val.users}))
        });
        return arr;
    },

    getDate: function(){},

    createRow: function (row) {
        let rows = [];

        for (var key in row) {
            rows.push(<TableRowColumn key={key+"_"+row[key]}>{row[key]}</TableRowColumn>);
        }

        return (<TableRow>{rows}</TableRow>);

    },
    createHeaderRow: function (headers,category) {

        const style = {
            header: {
                fontSize: 15,
                color:'#000000',
                backgroundColor: '#f3f3f3'
            }
        };
        let rows = [];
        console.log(category);
        for (var key in headers) {

            let index = key.indexOf(category);
            let subOne = key.slice(0,index).trim();
            let subTwo = key.slice(index, key.length).trim();
            rows.push(<TableHeaderColumn key={key} style={style.header}><b>{subOne} {subTwo}</b></TableHeaderColumn>);
        }
        return ( <TableRow>{rows}</TableRow>);
    },

    createTable: function () {
        let category = '';
        let input = null;
        console.log(this.props.category);
        if (this.props.category == "Favorite Views") {
            input = this.favoreiteViewsOnly(this.props.data);
            category = 'view';
        } else if (this.props.category == "Favorite saved") {
            input = this.favoreiteSavedOnly(this.props.data);
            category = 'saved';
        } else if (this.props.category == "Users") {
            input = this.usersOnly(this.props.data);
            category =  'users';
        }
        console.log(input);
        console.log("category"+category);
        return ( <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    {this.createHeaderRow(input[0],category)}
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {input.map((value, index, collection) => this.createRow(value))}
                </TableBody>
            </Table>
        );
    },

    render(){
        return <div>{this.createTable()}</div>;
    }

});
