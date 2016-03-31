/**
 * Created by JulieHillRoa on 14.03.2016.
 */
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { render } from 'react-dom';

export default React.createClass({

    shouldComponentUpdate: function () {
        return false;
    },
    componentWillReceiveProps: function (nextprops) {
        this.hideOrShowSeries(nextprops);

    },


    hideOrShowSeries: function (nextprops) {
        let chart = this.refs.chart.getChart();
        for (let i in chart.series) {
            if (nextprops.variables.indexOf(chart.series[i].name) < 0) {
                chart.series[i].hide();
            } else {
                chart.series[i].show();
            }
        }
    },

    componentWillMount: function () {
        this.drawChart();
    },

    drawChart: function () {
        let chart = this.refs.chart.getChart();
        let activeUser = [], mapView = [], chartView = [], reportTablesView = [], eventReportView = [], eventChartView = [],
            dashboardView = [], indicatorsView = [], totalView = [], averageView = [], savedMap = [], savedChart = [],
            savedReportTable = [], savedEventReport = [], savedEventChart = [], savedDashboard = [], savedIndicator = [],
            users = [], date = [];

        this.props.data.map((result)=> {
            let tmpDate = "";
            if (result.day != null) {
                tmpDate += result.day + "/";
            }
            if (result.week != null) {
                tmpDate += "Week: " + result.week + "/";
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

        chart.addSeries({
            name: "Active users",
            data: activeUser,
            color: "#FF0000"
        });
        chart.addSeries({
            name: "Map views",
            data: mapView,
            color: "#FF8000"
        });
        chart.addSeries({
            name: "Chart views",
            data: chartView,
            color: "#FFFF00"
        });
        chart.addSeries({
            name: "Report table views",
            data: reportTablesView,
            color: "#80FF00"
        });
        chart.addSeries({
            name: "Event report views",
            data: eventReportView,
            color: "#00FF00"
        });
        chart.addSeries({
            name: "Event chart views",
            data: eventChartView,
            color: "#00FF80"
        });
        chart.addSeries({
            name: "Dashboard views",
            data: dashboardView,
            color: "#00FFFF"
        });
        chart.addSeries({
            name: "Indicators views",
            data: indicatorsView,
            color: "#0080FF"
        });
        chart.addSeries({
            name: "Total views",
            data: totalView,
            color: "#0000FF"
        });
        chart.addSeries({
            name: "Average views",
            data: averageView,
            color: "#7F00FF"
        });
        //Her
        chart.addSeries({
            name: "Saved maps",
            data: savedMap,
            color: "#CC6600"
        });
        chart.addSeries({
            name: "Saved charts",
            data: savedChart,
            color: "#CCCC00"
        });
        chart.addSeries({
            name: "Saved report tables",
            data: savedReportTable,
            color: "#66CC00"
        });
        chart.addSeries({
            name: "Saved event report",
            data: savedEventReport,
            color: "#00CC00"
        });
        chart.addSeries({
            name: "Saved event charts",
            data: savedEventChart,
            color: "#00CC66"
        });
        chart.addSeries({
            name: "Saved dashboards",
            data: savedDashboard,
            color: "#00CCCC"
        });
        chart.addSeries({
            name: "Saved indicators",
            data: savedIndicator,
            color: "#0066CC"
        });
        chart.addSeries({
            name: "Total users",
            data: users,
            color: "#CC0000"
        });

        chart.xAxis[0].update({categories: date}, true);

        for (let i in chart.series) {
            if (this.props.variables.indexOf(chart.series[i].name) < 0) {
                chart.series[i].hide();
            } else {
                chart.series[i].show();
            }
        }
    },

    config: {
        xAxis: {
            categories: [],
        },
        title: {
            text: "Usage Analytics"
        }
    },

    render(){
        var style = {
            minHeight:600
        };

        return <div><ReactHighcharts config={this.config}  style={style} ref="chart"/></div>;
    }

});



