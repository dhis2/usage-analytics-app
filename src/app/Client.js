/**
 * Created by JulieHillRoa on 14.03.2016.
 */

import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.source,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        console.log("I Client:");
        console.log(this.state.data);
        return (
            <table border="1">
                <tr>
                    <th>Year</th>
                    <th>activeUsers</th>
                    <th>mapViews</th>
                    <th>chartViews</th>
                    <th>reportTablesViews</th>
                    <th>eventReportViews</th>
                    <th>eventChartViews</th>
                    <th>dashboardViews</th>
                    <th>indicatorsViews</th>
                    <th>totalViews</th>
                    <th>averageViews</th>
                    <th>savedMaps</th>
                    <th>savedCharts</th>
                    <th>savedReportTables</th>
                    <th>savedEventReports</th>
                    <th>savedEventCharts</th>
                    <th>savedDashboards</th>
                    <th>savedIndicators</th>
                    <th>users</th>
                </tr>


                {this.state.data.map((result)=> {
                    return <tr>
                        <td key={"year"}>{result.year}</td>
                        <td key={"activeUsers"}>{result.activeUsers}</td>
                        <td key={"mapViews"}>{result.mapViews}</td>
                        <td key={"chartViews"}>{result.chartViews}</td>
                        <td key={"reportTablesViews"}>{result.reportTablesViews}</td>
                        <td key={"eventReportViews"}>{result.eventReportViews}</td>
                        <td key={"eventChartViews"}>{result.eventChartViews}</td>
                        <td key={"dashboardViews"}>{result.dashboardViews}</td>
                        <td key={"indicatorsViews"}>{result.indicatorsViews}</td>
                        <td key={"totalViews"}>{result.totalViews}</td>
                        <td key={"averageViews"}>{result.averageViews}</td>
                        <td key={"savedMaps"}>{result.savedMaps}</td>
                        <td key={"savedCharts"}>{result.savedCharts}</td>
                        <td key={"savedReportTables"}>{result.savedReportTables}</td>
                        <td key={"savedEventReports"}>{result.savedEventReports}</td>
                        <td key={"savedEventCharts"}>{result.savedEventCharts}</td>
                        <td key={"savedDashboards"}>{result.savedDashboards}</td>
                        <td key={"savedIndicators"}>{result.savedIndicators}</td>
                        <td key={"users"}>{result.users}</td>
                    </tr>;
                })}

            </table>
        );
    }
});