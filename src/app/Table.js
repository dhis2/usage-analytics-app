/**
 * Created by yrjanaff on 29.03.2016.
 */

import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import Style from 'fixed-data-table/dist/fixed-data-table.min.css';


export default React.createClass({



    componentWillReceiveProps: function(nextprops){
        this.setColumnWidths(nextprops);
    },

    getInitialState: function(){
        let activeUser = [], mapView = [], chartView = [], reportTablesView = [], eventReportView = [], eventChartView = [],
            dashboardView = [], indicatorsView = [], totalView = [], averageView = [], savedMap = [], savedChart = [],
            savedReportTable = [], savedEventReport = [],savedEventChart = [], savedDashboard = [], savedIndicator = [],
            users = [], date = [];
        let columnWidths =
            {
                date: 100,
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



        console.log(this.props.variables);

        this.props.data.map((result)=>{
            let tmpDate = "";
            if(result.day != null){
                tmpDate += result.day + "/";
            }
            if(result.week != null){
                tmpDate += result.week + "/";
            }
            if(result.month != null){
                switch (result.month){
                    case 1: tmpDate += "Jan ";
                        break;
                    case 2: tmpDate += "Feb ";
                        break;
                    case 3: tmpDate += "Mar ";
                        break;
                    case 4: tmpDate += "Apr ";
                        break;
                    case 5: tmpDate += "May ";
                        break;
                    case 6: tmpDate += "Jun ";
                        break;
                    case 7: tmpDate += "Jul ";
                        break;
                    case 8: tmpDate += "Aug ";
                        break;
                    case 9: tmpDate += "Sep ";
                        break;
                    case 10: tmpDate += "Oct ";
                        break;
                    case 11: tmpDate += "Nov ";
                        break;
                    case 12: tmpDate += "Dec ";
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

        return {activeUser, mapView, chartView, reportTablesView, eventReportView, eventChartView,
            dashboardView, indicatorsView, totalView, averageView, savedMap, savedChart,
            savedReportTable, savedEventReport, savedEventChart, savedDashboard, savedIndicator,
            users, date, columnWidths};
    },

    setColumnWidths: function(nextprops){
        if(nextprops.variables.indexOf("Active users") != -1) {
            this.state.columnWidths.activeUser = 100;
        }
        else{
            this.state.columnWidths.activeUser = 0;
        }
        if(nextprops.variables.indexOf("Map views") != -1){
            this.state.columnWidths.mapView = 100;
        }
        else{
            this.state.columnWidths.mapView = 0;
        }
        if(nextprops.variables.indexOf("Chart views") != -1){
            this.state.columnWidths.chartView = 100;
        }
        else{
            this.state.columnWidths.chartView = 0;
        }
        if(nextprops.variables.indexOf("Report table views") != -1){
            this.state.columnWidths.reportTablesView = 100;
        }
        else{
            this.state.columnWidths.chartView = 0;
        }
        if(nextprops.variables.indexOf("Event report views") != -1){
            this.state.columnWidths.eventReportView = 100;
        }
        else{
            this.state.columnWidths.eventReportView = 0;
        }
        if(nextprops.variables.indexOf("Event chart views") != -1){
            this.state.columnWidths.eventChartView = 100;
        }
        else{
            this.state.columnWidths.eventChartView = 0;
        }
        if(nextprops.variables.indexOf("Dashboard views") != -1){
            this.state.columnWidths.dashboardView = 100;
        }
        else{
            this.state.columnWidths.dashboardView = 0;
        }
        if(nextprops.variables.indexOf("Indicators views") != -1){
            this.state.columnWidths.indicatorsView = 100;
        }
        else{
            this.state.columnWidths.indicatorsView = 0;
        }
        if(nextprops.variables.indexOf("Total views") != -1){
            this.state.columnWidths.totalView = 100;
        }
        else{
            this.state.columnWidths.totalView = 0;
        }
        if(nextprops.variables.indexOf("Average views") != -1){
            this.state.columnWidths.averageView = 100;
        }
        else{
            this.state.columnWidths.averageView = 0;
        }
        if(nextprops.variables.indexOf("Saved maps") != -1){
            this.state.columnWidths.savedMap = 100;
        }
        else{
            this.state.columnWidths.savedMap = 0;
        }
        if(nextprops.variables.indexOf("Saved charts") != -1){
            this.state.columnWidths.savedChart = 100;
        }
        else{
            this.state.columnWidths.savedChart = 0;
        }
        if(nextprops.variables.indexOf("Saved report tables") != -1){
            this.state.columnWidths.savedReportTable = 100;
        }
        else{
            this.state.columnWidths.savedReportTable = 0;
        }
        if(nextprops.variables.indexOf("Saved event report") != -1){
            this.state.columnWidths.savedEventReport = 100;
        }
        else{
            this.state.columnWidths.savedEventReport = 0;
        }
        if(nextprops.variables.indexOf("Saved event charts") != -1){
            this.state.columnWidths.savedEventChart = 100;
        }
        else{
            this.state.columnWidths.savedEventChart = 0;
        }
        if(nextprops.variables.indexOf("Saved dashboards") != -1){
            this.state.columnWidths.savedDashboard = 100;
        }
        else{
            this.state.columnWidths.savedDashboard = 0;
        }
        if(nextprops.variables.indexOf("Saved indicators") != -1){
            this.state.columnWidths.savedIndicator = 100;
        }
        else{
            this.state.columnWidths.savedIndicator = 0;
        }
        if(nextprops.variables.indexOf("Total users") != -1){
            this.state.columnWidths.users = 100;
        }
        else{
            this.state.columnWidths.users = 0;
        }

        console.log(this.state.columnWidths);
    },

    render() {
        console.log("Inni Table render!");
        console.log(this.props.data);
        this.setColumnWidths(this.props);

        var style={
            header:{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'normal',
                fontSize:25
            }
        };

        return (
            <div>
                <h1 style={style.header}>Favorite views</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={($(document).width()) - 400}
                    height={400}
                    headerHeight={50}
                    style={style.colloumheader}
                    {...this.props}
                >


                    <Column
                        columnKey="Date"

                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths.date}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />

                    <Column
                        columnKey="Map views"
                        isResizable={true}
                        header={<Cell>Map</Cell>}
                        width={this.state.columnWidths.mapView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.mapView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Chart views"
                        header={<Cell>Chart</Cell>}
                        width={this.state.columnWidths.chartView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.chartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Report table views"
                        header={<Cell>Report table</Cell>}
                        width={this.state.columnWidths.reportTablesView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.reportTablesView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Event report views"
                        header={<Cell>Event report</Cell>}
                        width={this.state.columnWidths.eventReportView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventReportView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Event chart views"
                        header={<Cell>Event chart</Cell>}
                        width={this.state.columnWidths.eventChartView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventChartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Dashboard views"
                        header={<Cell>Dashboard</Cell>}
                        width={this.state.columnWidths.dashboardView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.dashboardView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Indicator views"
                        header={<Cell>Indicators</Cell>}
                        width={this.state.columnWidths.indicatorsView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.indicatorsView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Total views"
                        header={<Cell>Total views</Cell>}
                        width={this.state.columnWidths.totalView}
                        height={20}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.totalView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Average views"
                        header={<Cell>Average views</Cell>}
                        width={this.state.columnWidths.averageView}
                        height={20}
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
                    width={($(document).width()) - 400}
                    height={400}
                    headerHeight={50}
                >
                    <Column
                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths.date}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey="Saved maps"
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
                        columnKey="Saved charts"
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
                        columnKey="Saved report tables"
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
                        columnKey="Saved event charts"
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
                        columnKey="Saved dashboards"
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
                        columnKey="Saved indicators"
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
                        columnKey="Total users"
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
                        columnKey="Active users"
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
    }

});