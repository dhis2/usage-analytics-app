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
                Mapviews: val.mapViews,
                Chartviews: val.chartViews,
                ReportTablesviews: val.reportTablesViews,
                EventReportviews: val.eventReportViews,
                EventChartviews: val.eventChartViews,
                Dashboardviews: val.dashboardViews,
                Indicatorsviews: val.indicatorsViews,
                Totalviews: val.totalViews,
                Averageviews: val.averageViews
            }))
        });
        return arr;
    },
    favoreiteSavedOnly: function (data) {
        let arr = [];
        data.filter((val) => {
            return (arr.push({
                Savedmaps: val.savedMaps,
                Savedcharts: val.savedCharts,
                SavedReportTables: val.savedReportTables,
                SavedEventReports: val.savedEventReports,
                SavedEventCharts: val.savedEventCharts,
                SavedDashboards: val.savedDashboards,
                savedIndicators: val.savedIndicators,
            }))
        });
        return arr;
    },
    usersOnly: function (data) {
        let arr = [];
        data.filter((val) => {
            return (arr.push({ActiveUsers: val.activeUsers, TotalUsers: val.users}))
        });
        return arr;
    },

    createRow: function (row) {
        let rows = [];

        for (var key in row) {
            rows.push(<TableRowColumn key={key+"_"+row[key]}>{row[key]}</TableRowColumn>);
        }

        return (<TableRow>{rows}</TableRow>);

    },
    createHeaderRow: function (headers) {

        const style = {
            header: {
                fontSize: 15,
                color:'#000000',
                backgroundColor: '#f3f3f3'
            }
        };
        let rows = [];

        for (var key in headers) {
            rows.push(<TableHeaderColumn key={key} style={style.header}><b>{key}</b></TableHeaderColumn>);
        }
        return ( <TableRow>{rows}</TableRow>);
    },

    createTable: function () {
        let input = null;
        if (this.props.category == "Favorite Views") {
            input = this.favoreiteViewsOnly(this.props.data);
        } else if (this.props.category == "Favorite saved") {
            input = this.favoreiteSavedOnly(this.props.data);
        } else if (this.props.category == "Users") {
            input = this.usersOnly(this.props.data);
        }

        return ( <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    {this.createHeaderRow(input[0])}
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
