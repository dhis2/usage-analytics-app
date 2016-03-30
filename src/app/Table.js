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

const styles = {
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.blue500,
        primary2Color: Colors.blue700,
        primary3Color: Colors.lightBlack,
        accent1Color: '#276696',
        accent2Color: '#E9E9E9',
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
    }
};

const count = 0;

export default React.createClass({

    getInitialState: function(){
        let activeUser = [], mapView = [], chartView = [], reportTablesView = [], eventReportView = [], eventChartView = [],
            dashboardView = [], indicatorsView = [], totalView = [], averageView = [], savedMap = [], savedChart = [],
            savedReportTable = [], savedEventReport = [],savedEventChart = [], savedDashboard = [], savedIndicator = [],
            users = [], date = [];

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
            users, date};
    },

    render: function() {
        console.log("Inni Table render!");
        console.log(this.props.data);

        return (
            <div>
                <h1>Views</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={1000}
                    height={this.props.data.length * 50}
                    headerHeight={50}
                >
                    <Column
                        hide={true}
                        header={<Cell>Date</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />

                    <Column
                        header={<Cell>Map</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.mapView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Chart</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.chartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Report table</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.reportTablesView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Event report</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventReportView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Event chart</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.eventChartView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Dashboard</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.dashboardView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Indicators</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.indicatorsView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Total views</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.totalView[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Average views</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.averageView[rowIndex]}
                            </Cell>
                        )}
                    />


                </Table>
                <h1>Saves</h1>
                <Table
                    rowHeight={50}
                    rowsCount={this.props.data.length}
                    width={900}
                    height={300}
                    headerHeight={50}
                >
                    <Column
                        header={<Cell>Date</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.date[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Maps</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedMap[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Charts</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Report tables</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedReportTable[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Event charts</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedEventChart[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Dashboards</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedDashboard[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Indicators</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.savedIndicator[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Total users</Cell>}
                        width={100}
                        height={50}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                {this.state.users[rowIndex]}
                            </Cell>
                        )}
                    />
                    <Column
                        header={<Cell>Active users</Cell>}
                        width={100}
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