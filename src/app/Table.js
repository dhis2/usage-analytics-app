/**
 * Created by yrjanaff on 29.03.2016.
 */

import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import Style from 'fixed-data-table/dist/fixed-data-table.min.css';

export default React.createClass({

    componentWillReceiveProps: function (nextprops) {
        this.setColumnWidths(nextprops);
    },

    getInitialState: function () {
        let activeUser = [], mapView = [], chartView = [], reportTablesView = [], eventReportView = [], eventChartView = [],
            dashboardView = [], indicatorsView = [], totalView = [], averageView = [], savedMap = [], savedChart = [],
            savedReportTable = [], savedEventReport = [], savedEventChart = [], savedDashboard = [], savedIndicator = [],
            users = [], date = [];
        let columnWidths =
        {
            viewDate: 0,
            savedDate: 0,
            activeUser: 0,
            mapView: 0,
            chartView: 0,
            reportTablesView: 0,
            eventReportView: 0,
            eventChartView: 0,
            dashboardView: 0,
            indicatorsView: 0,
            totalView: 0,
            averageView: 0,
            savedMap: 0,
            savedChart: 0,
            savedReportTable: 0,
            savedEventReport: 0,
            savedEventChart: 0,
            savedDashboard: 0,
            savedIndicator: 0,
            users: 0
        };

        let allVariables = ["Active users","Map views","Chart views",
            "Report table views","Event report views","Event chart views",
            "Dashboard views","Indicators views","Total views","Average views","Saved maps",
            "Saved charts","Saved report tables","Saved event report",
            "Saved event charts","Saved dashboards","Saved indicators",
            "Total users"];


        let tableDimentions =
        {
            tableWidth: ($(document).width()) - 600,
            tableHeight: 400
        };


        console.log(this.props.variables);

        this.props.data.map((result)=> {
            let tmpDate = "";
            if (result.day != null) {
                tmpDate += result.day + "/";
            }
            if (result.week != null) {
                tmpDate += result.week + "/";
            }
            if (result.month != null) {
                switch (result.month) {
                    case 1:
                        tmpDate += "Jan ";
                        break;
                    case 2:
                        tmpDate += "Feb ";
                        break;
                    case 3:
                        tmpDate += "Mar ";
                        break;
                    case 4:
                        tmpDate += "Apr ";
                        break;
                    case 5:
                        tmpDate += "May ";
                        break;
                    case 6:
                        tmpDate += "Jun ";
                        break;
                    case 7:
                        tmpDate += "Jul ";
                        break;
                    case 8:
                        tmpDate += "Aug ";
                        break;
                    case 9:
                        tmpDate += "Sep ";
                        break;
                    case 10:
                        tmpDate += "Oct ";
                        break;
                    case 11:
                        tmpDate += "Nov ";
                        break;
                    case 12:
                        tmpDate += "Dec ";
                        break;
                }
            }
            tmpDate += result.year;
            date.push(tmpDate);
            activeUser.push(result.activeUsers);
            mapView.push(result.mapViews);
            chartView.push(result.chartViews);
            reportTablesView.push(result.reportTablesViews);
            eventReportView.push(result.eventReportViews);
            eventChartView.push(result.eventChartViews);
            dashboardView.push(result.dashboardViews);
            indicatorsView.push(result.indicatorsViews);
            totalView.push(result.totalViews);
            averageView.push(result.averageViews);
            savedMap.push(result.savedMaps);
            savedChart.push(result.savedCharts);
            savedReportTable.push(result.savedReportTables);
            savedEventReport.push(result.savedEventReports);
            savedEventChart.push(result.savedEventCharts);
            savedDashboard.push(result.savedDashboards);
            savedIndicator.push(result.savedIndicators);
            users.push(result.users);
        });

        return {
            activeUser, mapView, chartView, reportTablesView, eventReportView, eventChartView,
            dashboardView, indicatorsView, totalView, averageView, savedMap, savedChart,
            savedReportTable, savedEventReport, savedEventChart, savedDashboard, savedIndicator,
            users, date, columnWidths, allVariables, tableDimentions
        };
    },

    render() {
        console.log("Inni Table render!");
        console.log(this.props.data);
        this.setColumnWidths(this.props);

        var style = {
            header: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'normal',
                fontSize: 25
            }
        };

        return (
            <div>
                <h1 style={style.header}>Favorite views</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={this.state.tableDimentions.tableWidth}
                    height={this.state.tableDimentions.tableHeight}
                    headerHeight={50}
                    style={style.colloumheader}
                    {...this.props}
                >
                    <Column
                        columnKey="Date"
                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths.viewDate}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />

                    <Column
                        columnKey={this.state.allVariables[1]}
                        isResizable={true}
                        header={<Cell>Map</Cell>}
                        width={this.state.columnWidths.mapView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.mapView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[2]}
                        header={<Cell>Chart</Cell>}
                        width={this.state.columnWidths.chartView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.chartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[3]}
                        header={<Cell>Report table</Cell>}
                        width={this.state.columnWidths.reportTablesView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.reportTablesView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[4]}
                        header={<Cell>Event report</Cell>}
                        width={this.state.columnWidths.eventReportView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventReportView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[5]}
                        header={<Cell>Event chart</Cell>}
                        width={this.state.columnWidths.eventChartView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventChartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[6]}
                        header={<Cell>Dashboard</Cell>}
                        width={this.state.columnWidths.dashboardView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.dashboardView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[7]}
                        header={<Cell>Indicators</Cell>}
                        width={this.state.columnWidths.indicatorsView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.indicatorsView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[8]}
                        header={<Cell>Total views</Cell>}
                        width={this.state.columnWidths.totalView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.totalView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[9]}
                        header={<Cell>Average views</Cell>}
                        width={this.state.columnWidths.averageView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.averageView[rowIndex]}
                            </Cell>
                        )}
                    />
                </Table>
                <h1 style={style.header}>Saved</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={this.state.tableDimentions.tableWidth}
                    height={this.state.tableDimentions.tableHeight}
                    headerHeight={50}
                >
                    <Column
                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths.savedDate}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[10]}
                        header={<Cell>Maps</Cell>}
                        width={this.state.columnWidths.savedMap}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedMap[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[11]}
                        header={<Cell>Charts</Cell>}
                        width={this.state.columnWidths.savedChart}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[12]}
                        header={<Cell>Report tables</Cell>}
                        width={this.state.columnWidths.savedReportTable}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedReportTable[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[13]}
                        header={<Cell>Event reports</Cell>}
                        width={this.state.columnWidths.savedEventReport}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedEventReport[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[14]}
                        header={<Cell>Event charts</Cell>}
                        width={this.state.columnWidths.savedEventChart}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedEventChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[15]}
                        header={<Cell>Dashboards</Cell>}
                        width={this.state.columnWidths.savedDashboard}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedDashboard[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[16]}
                        header={<Cell>Indicators</Cell>}
                        width={this.state.columnWidths.savedIndicator}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedIndicator[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[17]}
                        header={<Cell>Total users</Cell>}
                        width={this.state.columnWidths.users}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.users[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={this.state.allVariables[0]}
                        header={<Cell>Active users</Cell>}
                        width={this.state.columnWidths.activeUser}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.activeUser[rowIndex]}
                            </Cell>
                        )}
                    />
                </Table>
                <br/>
            </div>
        );
    },

    setColumnWidths: function (nextprops) {
        let viewCount = 1;
        let savedCount = 1;

        for(let i = 0; i < nextprops.variables.length; i++){
            if((nextprops.variables[i] == this.state.allVariables[1]) ||
                (nextprops.variables[i] == this.state.allVariables[2]) ||
                (nextprops.variables[i] == this.state.allVariables[3]) ||
                (nextprops.variables[i] == this.state.allVariables[4]) ||
                (nextprops.variables[i] == this.state.allVariables[5]) ||
                (nextprops.variables[i] == this.state.allVariables[6]) ||
                (nextprops.variables[i] == this.state.allVariables[7]) ||
                (nextprops.variables[i] == this.state.allVariables[8]) ||
                (nextprops.variables[i] == this.state.allVariables[9])
            ){
                viewCount++;
            }
            if((nextprops.variables[i] == this.state.allVariables[10]) ||
                (nextprops.variables[i] == this.state.allVariables[11]) ||
                (nextprops.variables[i] == this.state.allVariables[12]) ||
                (nextprops.variables[i] == this.state.allVariables[13]) ||
                (nextprops.variables[i] == this.state.allVariables[14]) ||
                (nextprops.variables[i] == this.state.allVariables[15]) ||
                (nextprops.variables[i] == this.state.allVariables[16]) ||
                (nextprops.variables[i] == this.state.allVariables[17]) ||
                (nextprops.variables[i] == this.state.allVariables[0])
            ){
                savedCount++;
            }
        }

        let viewActiveWidth = this.state.tableDimentions.tableWidth / viewCount;
        let savedActiveWidth = this.state.tableDimentions.tableWidth / savedCount;

        this.state.tableDimentions.tableHeight = (this.props.data.length * 50.3) + 50;
        if(this.state.tableDimentions.tableHeight >= 400){
            this.state.tableDimentions.tableHeight = 400;
        }

        console.log(viewCount);
        console.log(savedCount);

        this.state.columnWidths.viewDate = viewActiveWidth;
        this.state.columnWidths.savedDate = savedActiveWidth;

        if (nextprops.variables.indexOf(this.state.allVariables[0]) != -1) {
            this.state.columnWidths.activeUser = savedActiveWidth;
        }
        else {
            this.state.columnWidths.activeUser = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[1]) != -1) {
            this.state.columnWidths.mapView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.mapView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[2]) != -1) {
            this.state.columnWidths.chartView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.chartView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[3]) != -1) {
            this.state.columnWidths.reportTablesView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.reportTablesView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[4]) != -1) {
            this.state.columnWidths.eventReportView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.eventReportView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[5]) != -1) {
            this.state.columnWidths.eventChartView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.eventChartView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[6]) != -1) {
            this.state.columnWidths.dashboardView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.dashboardView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[7]) != -1) {
            this.state.columnWidths.indicatorsView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.indicatorsView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[8]) != -1) {
            this.state.columnWidths.totalView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.totalView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[9]) != -1) {
            this.state.columnWidths.averageView = viewActiveWidth;
        }
        else {
            this.state.columnWidths.averageView = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[10]) != -1) {
            this.state.columnWidths.savedMap = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedMap = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[11]) != -1) {
            this.state.columnWidths.savedChart = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedChart = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[12]) != -1) {
            this.state.columnWidths.savedReportTable = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedReportTable = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[13]) != -1) {
            this.state.columnWidths.savedEventReport = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedEventReport = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[14]) != -1) {
            this.state.columnWidths.savedEventChart = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedEventChart = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[15]) != -1) {
            this.state.columnWidths.savedDashboard = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedDashboard = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[16]) != -1) {
            this.state.columnWidths.savedIndicator = savedActiveWidth;
        }
        else {
            this.state.columnWidths.savedIndicator = 0;
        }
        if (nextprops.variables.indexOf(this.state.allVariables[17]) != -1) {
            this.state.columnWidths.users = savedActiveWidth;
        }
        else {
            this.state.columnWidths.users = 0;
        }

        console.log(this.state.columnWidths);
    }

});