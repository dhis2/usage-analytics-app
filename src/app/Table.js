/**
 * Created by yrjanaff on 29.03.2016.
 */

import React from 'react';
import MaterialTable from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import Spacing from 'material-ui/lib/styles/spacing';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import TextField from 'material-ui/lib/text-field';
import Toggle from 'material-ui/lib/toggle';
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
        let columnWidths = [
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
            }

        ];

        console.log(this.props.variables);
        //this.componentWillReceiveProps(this.props);

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
            this.state.columnWidths[0].activeUser = 100;
        }
        if(nextprops.variables.indexOf("Map views") != -1){
            this.state.columnWidths[0].mapView = 100;
        }
        if(nextprops.variables.indexOf("Chart views") != -1){
            this.state.columnWidths[0].chartView = 100;
        }
        if(nextprops.variables.indexOf("Report table views") != -1){
            this.state.columnWidths[0].reportTablesView = 100;
        }
        if(nextprops.variables.indexOf("Event report views") != -1){
            this.state.columnWidths[0].eventReportView = 100;
        }
        if(nextprops.variables.indexOf("Event chart views") != -1){
            this.state.columnWidths[0].eventChartView = 100;
        }
        if(nextprops.variables.indexOf("Dashboard views") != -1){
            this.state.columnWidths[0].dashboardView = 100;
        }
        if(nextprops.variables.indexOf("Indicators views") != -1){
            this.state.columnWidths[0].indicatorsView = 100;
        }
        if(nextprops.variables.indexOf("Total views") != -1){
            this.state.columnWidths[0].totalView = 100;
        }
        if(nextprops.variables.indexOf("Average views") != -1){
            this.state.columnWidths[0].averageView = 100;
        }
        if(nextprops.variables.indexOf("Saved maps") != -1){
            this.state.columnWidths[0].savedMap = 100;
        }
        if(nextprops.variables.indexOf("Saved charts") != -1){
            this.state.columnWidths[0].savedChart = 100;
        }
        if(nextprops.variables.indexOf("Saved report tables") != -1){
            this.state.columnWidths[0].savedReportTable = 100;
        }
        if(nextprops.variables.indexOf("Saved event report") != -1){
            this.state.columnWidths[0].savedEventReport = 100;
        }
        if(nextprops.variables.indexOf("Saved event charts") != -1){
            this.state.columnWidths[0].savedEventChart = 100;
        }
        if(nextprops.variables.indexOf("Saved dashboards") != -1){
            this.state.columnWidths[0].savedDashboard = 100;
        }
        if(nextprops.variables.indexOf("Saved indicators") != -1){
            this.state.columnWidths[0].savedIndicator = 100;
        }
        if(nextprops.variables.indexOf("Total users") != -1){
            this.state.columnWidths[0].user = 100;
        }

        console.log(this.state.columnWidths);
    },

    render: function() {
        console.log("Inni Table render!");
        console.log(this.props.data);
        this.setColumnWidths(this.props);

        return (
            <div>
                <h1>Favorite views</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={($(document).width()) - 400}
                    height={(this.props.data.length > 30 ) ? 1000 : this.props.data.length * 50}
                    headerHeight={50}
                    onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                    isColumnResizing={false}
                >


                    <Column
                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths[0].date}
                        height={50}
                        isResizable={true}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />

                    <Column
                        columnKey={2}
                        header={<Cell>Map</Cell>}
                        width={this.state.columnWidths[0].mapView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.mapView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={3}
                        header={<Cell>Chart</Cell>}
                        width={this.state.columnWidths[0].chartView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.chartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={4}
                        header={<Cell>Report table</Cell>}
                        width={this.state.columnWidths[0].reportTablesView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.reportTablesView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={5}
                        header={<Cell>Event report</Cell>}
                        width={this.state.columnWidths[0].eventReportView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventReportView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={6}
                        header={<Cell>Event chart</Cell>}
                        width={this.state.columnWidths[0].eventChartView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventChartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={7}
                        header={<Cell>Dashboard</Cell>}
                        width={this.state.columnWidths[0].dashboardView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.dashboardView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={8}
                        header={<Cell>Indicators</Cell>}
                        width={this.state.columnWidths[0].indicatorsView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.indicatorsView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={9}
                        header={<Cell>Total views</Cell>}
                        width={this.state.columnWidths[0].totalView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.totalView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={10}
                        header={<Cell>Average views</Cell>}
                        width={this.state.columnWidths[0].averageView}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.averageView[rowIndex]}
                            </Cell>
                        )}
                    />
                </Table>
                <h1>Saved</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={($(document).width()) - 400}
                    height={300}
                    headerHeight={50}
                >
                    <Column
                        columnKey={11}
                        header={<Cell>Date</Cell>}
                        width={this.state.columnWidths[0].date}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={12}
                        header={<Cell>Maps</Cell>}
                        width={this.state.columnWidths[0].savedMap}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedMap[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={13}
                        header={<Cell>Charts</Cell>}
                        width={this.state.columnWidths[0].savedChart}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={14}
                        header={<Cell>Report tables</Cell>}
                        width={this.state.columnWidths[0].savedReportTable}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedReportTable[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={15}
                        header={<Cell>Event charts</Cell>}
                        width={this.state.columnWidths[0].savedEventChart}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedEventChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={16}
                        header={<Cell>Dashboards</Cell>}
                        width={this.state.columnWidths[0].savedDashboard}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedDashboard[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={17}
                        header={<Cell>Indicators</Cell>}
                        width={this.state.columnWidths[0].savedIndicator}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedIndicator[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={18}
                        header={<Cell>Total users</Cell>}
                        width={this.state.columnWidths[0].users}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.users[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        columnKey={19}
                        header={<Cell>Active users</Cell>}
                        width={this.state.columnWidths[0].activeUser}
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