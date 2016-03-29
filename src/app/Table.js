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

export default class Table extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: false,
            fixedFooter: true,
            stripedRows: true,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            displaySelectAll: false,
            adjustForCheckbox: false,
            displayRowCheckbox: false,
            bodyStyle: { overflowX: undefined, overflowY: undefined }
        };
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };


    render() {

        return (
            <div id="scroller">
            <MaterialTable
                //bodyStyle={this.state.bodyStyle}
                //style={{display: 'inline'}}
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}
                onRowSelection={this._onRowSelection}
            >
                <TableHeader
                    enableSelectAll={this.state.enableSelectAll}
                    displaySelectAll={this.state.displaySelectAll}
                    adjustForCheckbox={this.state.adjustForCheckbox}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                            Super Header
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="The Year">Year</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Active Users">Active Users</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Map Views">Map Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Chart Views">Chart Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Report Tables Views">Report Tables Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Event Report Views">Event Report Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Event Chart Views">Event Chart Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Dashboard Views">Dashboard Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Indicators Views">Indicators Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Total Views">Total Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Average Views">Average Views</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Maps">Saved Maps</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Charts">Saved Charts</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Report Tables">Saved Report Tables</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Event Reports">Saved Event Reports</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Event Charts">Saved Event Charts</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Dashboards">Saved Dashboards</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Saved Indicators">Saved Indicators</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Users">Users</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                    displayRowCheckbox={this.state.displayRowCheckbox}
                >
                    {this.props.data.map( (result) => (
                        <TableRow key={result.year}>
                            <TableRowColumn>{result.year}</TableRowColumn>
                            <TableRowColumn>{result.activeUsers}</TableRowColumn>
                            <TableRowColumn>{result.mapViews}</TableRowColumn>
                            <TableRowColumn>{result.chartViews}</TableRowColumn>
                            <TableRowColumn>{result.reportTablesViews}</TableRowColumn>
                            <TableRowColumn>{result.eventReportViews}</TableRowColumn>
                            <TableRowColumn>{result.eventChartViews}</TableRowColumn>
                            <TableRowColumn>{result.dashboardViews}</TableRowColumn>
                            <TableRowColumn>{result.indicatorsViews}</TableRowColumn>
                            <TableRowColumn>{result.totalViews}</TableRowColumn>
                            <TableRowColumn>{result.averageViews}</TableRowColumn>
                            <TableRowColumn>{result.savedMaps}</TableRowColumn>
                            <TableRowColumn>{result.savedCharts}</TableRowColumn>
                            <TableRowColumn>{result.savedReportTables}</TableRowColumn>
                            <TableRowColumn>{result.savedEventReports}</TableRowColumn>
                            <TableRowColumn>{result.savedEventCharts}</TableRowColumn>
                            <TableRowColumn>{result.savedDashboards}</TableRowColumn>
                            <TableRowColumn>{result.savedIndicators}</TableRowColumn>
                            <TableRowColumn>{result.users}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            Super Footer
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </MaterialTable>
                    </div>
        );
    }
};