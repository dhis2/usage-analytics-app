import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {render} from 'react-dom';

let date = [];
let isVisible = 'block';
let title = 'Favorite views';
let subTitle = 'Number of times users looked at analysis favorites';

export default React.createClass({

    componentDidUpdate: function () {

        this.setUpChart();
    },

    componentDidMount: function () {

        this.setUpChart();
    },

    drawChart: function (category) {
        let chart = this.refs.chart.getChart();

        if (chart.series.length > 0) {
            for (let i = chart.series.length - 1; i > -1; i--) {
                chart.series[i].remove();
            }
        }

        if (category == "Favorite Views") {
            isVisible = 'block';
            chart.addSeries({
                name: "Map views",
                data: (this.props.data.map((result) => {
                    return result.mapViews;
                })),
                color: "#CC6600",
                visible: true
            }, false);
            chart.addSeries({
                name: "Chart views",
                data: (this.props.data.map((result) => {
                    return result.chartViews;
                })),
                color: "#CCCC00",
                visible: true
            }, false);
            chart.addSeries({
                name: "Report table views",
                data: (this.props.data.map((result) => {
                    return result.reportTableViews;
                })),
                color: "#66CC00",
                visible: true
            }, false);
            chart.addSeries({
                name: "Event report views",
                data: (this.props.data.map((result) => {
                    return result.eventReportViews;
                })),
                color: "#ff0066",
                visible: true
            }, false);
            chart.addSeries({
                name: "Event chart views",
                data: (this.props.data.map((result) => {
                    return result.eventChartViews;
                })),
                color: "#000000",
                visible: true
            }, false);
            chart.addSeries({
                name: "Dashboard views",
                data: (this.props.data.map((result) => {
                    return result.dashboardViews;
                })),
                color: "#00CCCC",
                visible: true
            }, false);
            chart.addSeries({
                name: "Average Map views",
                data: (this.props.data.map((result) => {
                    return result.averageMapViews;
                })),
                color: "#CC6600",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average Chart views",
                data: (this.props.data.map((result) => {
                    return result.averageChartViews;
                })),
                color: "#CCCC00",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average Report table views",
                data: (this.props.data.map((result) => {
                    return result.averageReportTableViews;
                })),
                color: "#66CC00",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average Event report views",
                data: (this.props.data.map((result) => {
                    return result.averageEventReportViews;
                })),
                color: "#ff0066",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average Event chart views",
                data: (this.props.data.map((result) => {
                    return result.averageEventChartViews;
                })),
                color: "#000000",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average Dashboard views",
                data: (this.props.data.map((result) => {
                    return result.averageDashboardViews;
                })),
                color: "#00CCCC",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average views",
                data: (this.props.data.map((result) => {
                    return result.averageViews;
                })),
                color: "#9900cc",
                visible: false
            }, false);
            chart.addSeries({
                name: "Total views",
                data: (this.props.data.map((result) => {
                    return result.totalViews;
                })),
                color: "#0000FF",
                visible: false
            }, false);
        }
        else if (category == "Favorite saved") {
            isVisible = 'none';
            chart.addSeries({
                name: "Saved maps",
                data: (this.props.data.map((result) => {
                    return result.savedMaps;
                })),
                color: "#CC6600"
            }, false);
            chart.addSeries({
                name: "Saved charts",
                data: (this.props.data.map((result) => {
                    return result.savedCharts;
                })),
                color: "#CCCC00"
            }, false);
            chart.addSeries({
                name: "Saved report tables",
                data: (this.props.data.map((result) => {
                    return result.savedReportTables;
                })),
                color: "#66CC00"
            }, false);
            chart.addSeries({
                name: "Saved event report",
                data: (this.props.data.map((result) => {
                    return result.savedEventReports;
                })),
                color: "#ff0066"
            }, false);
            chart.addSeries({
                name: "Saved event charts",
                data: (this.props.data.map((result) => {
                    return result.savedEventCharts;
                })),
                color: "#000000"
            }, false);
            chart.addSeries({
                name: "Saved dashboards",
                data: (this.props.data.map((result) => {
                    return result.savedDashboards;
                })),
                color: "#00CCCC"
            }, false);
            chart.addSeries({
                name: "Saved indicators",
                data: (this.props.data.map((result) => {
                    return result.savedIndicators;
                })),
                color: "#0066CC"
            }, false);
        }
        else if (category == "Users") {
            isVisible = 'none';
            chart.addSeries({
                name: "Active users",
                data: (this.props.data.map((result) => {
                    return result.activeUsers;
                })),
                color: "#333300"
            }, false);

            chart.addSeries({
                name: "Total users",
                data: (this.props.data.map((result) => {
                    return result.users;
                })),
                color: "#009900"
            }, false);
        }
        chart.xAxis[0].update({categories: date}, true);
        chart.redraw();
    },

    setUpChart: function () {
        date = [];
        this.props.data.map((result)=> {
            date.push(this.getDate(result.year, result.month, result.week, result.day));
        });

        this.drawChart(this.props.category);
    },

    getDate: function(year,month,week,day){
        let date = year;
        if(month != null){
            let monthText = '';
            if(month == 1) {monthText = ' jan ';}
            else if(month == 2) {monthText = ' feb ';}
            else if(month == 3) {monthText = ' mar ';}
            else if(month == 4) {monthText = ' apr ';}
            else if(month == 5) {monthText = ' may ';}
            else if(month == 6) {monthText = ' jun ';}
            else if(month == 7) {monthText = ' jul ';}
            else if(month == 8) {monthText = ' aug ';}
            else if(month == 9) {monthText = ' sep ';}
            else if(month == 10) {monthText = ' oct ';}
            else if(month == 11) {monthText = ' nov ';}
            else if(month == 12) {monthText = ' dec ';}

            date = monthText + date;
            if (day != null) {
                date = day + date;
            }
        }
        if (week != null) {
            date = week + ' / ' + date;
        }
        return date;
    },

    getConfig: function () {
        return {
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [],
            },
            title: {
                text: title
            },
            subtitle: {
                text: subTitle,
                color:'#88888888'
            }
        };
    },

    _onChange: function (e, selected) {
        let chart = this.refs.chart.getChart();
        if (selected == "total") {
            chart.series[(chart.series.length - 1)].show();
            chart.series[(chart.series.length - 2)].hide();
        }
        else if(selected == "averageTotal"){
            chart.series[(chart.series.length - 2)].show();
            chart.series[(chart.series.length - 1)].hide();
        }
        else {
            chart.series[(chart.series.length - 1)].hide();
            chart.series[(chart.series.length - 2)].hide();
        }
        for (let i = chart.series.length - 3; i > -1; i--) {
            if (selected == "total"  || selected == "averageTotal"  ) {
                chart.series[i].hide();
            }
            else {
                chart.series[i].show();
            }
        }
    },

    render(){
        if (this.props.category != null) {
            title = this.props.category;
            if(title == 'Favorite Views'){
                subTitle = 'Number of times users looked at analysis favorites';
            }
            else if(title == 'Favorite saved'){
                subTitle = 'Number of analysis favorites created by users';
            }
            else if(title == 'Users'){
                subTitle = 'Number of users in the system';
            }
            this.props.category == "Favorite Views" ? isVisible = 'block' : isVisible = 'none';
        }
        var style = {
            minHeight: 700
        };

        return (
            <div>
                <ReactHighcharts config={this.getConfig()} style={style} ref="chart"/>
            </div>
        );
    }

});


