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
                Date: this.getDate(val.year,val.month,val.week,val.day),
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
                Date: this.getDate(val.year,val.month,val.week,val.day),
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
            return (arr.push({  Date: this.getDate(val.year,val.month,val.week,val.day),Activeusers: val.activeUsers, Totalusers: val.users}))
        });
        return arr;
    },

    getDate: function(year,month,week,day){
        let date = year;
        if(month != null){
            let monthText = '';
            if(month == 1) {monthText = ' jan';}
            else if(month == 2) {monthText = ' feb';}
            else if(month == 3) {monthText = ' mar';}
            else if(month == 4) {monthText = ' apr';}
            else if(month == 5) {monthText = ' may';}
            else if(month == 6) {monthText = ' jun';}
            else if(month == 7) {monthText = ' jul';}
            else if(month == 8) {monthText = ' aug';}
            else if(month == 9) {monthText = ' sep';}
            else if(month == 10) {monthText = ' oct';}
            else if(month == 11) {monthText = ' nov';}
            else if(month == 12) {monthText = ' dec';}

            date = year + monthText;
            if(day != null){
                date += ' ' +day ;
            }
        }
        if(week != null){
            date += ' / ' + week;
        }
        return date;
    },

    createRow: function (row) {
        let rows = [];

        for (var key in row) {
            rows.push(<TableRowColumn key={row[key]}>{row[key]}</TableRowColumn>);
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
        let subOne = '';
        let subTwo = '';
        for (var key in headers) {
            if(key != 'Date'){
                let index = key.indexOf(category);
                subOne = key.slice(0,index).trim();
                subTwo = key.slice(index, key.length).trim();
            }else {subOne = key;}
            rows.push(<TableHeaderColumn style={style.header}><b>{subOne} {subTwo}</b></TableHeaderColumn>);
        }
        return ( <TableRow>{rows}</TableRow>);
    },

    createTable: function () {
        let category = '';
        let input = null;
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
        return ( <Table fixedHeader={true}>
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
        return <div style={ {marginTop: 50}}>{this.createTable()}</div>;
    }

});
