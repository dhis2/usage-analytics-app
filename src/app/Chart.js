/**
 * Created by JulieHillRoa on 14.03.2016.
 */
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {render} from 'react-dom';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

let date = [];
const styles = {
    block: {
        maxWidth: 250,
        //display: 'inline-block'
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    visible: {
        display: {}
    }
};

export default React.createClass({

    shouldComponentUpdate: function () {
        return false;
    },
    componentWillReceiveProps: function (nextprops) {
        this.drawChart(nextprops.category);
        this.ViewPicker(nextprops.category);
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

    componentDidMount: function () {
        this.setUpChart();
    },

    drawChart: function (category) {
        let chart = this.refs.chart.getChart();

        if(chart.series.length > 0) {
            for (let i = chart.series.length-1; i > -1; i--) {
                chart.series[i].remove();
            }
        }

        if(category == "Favorite Views"){
            chart.addSeries({
                name: "Map views",
                data: (this.props.data.map((result) => {
                    return result.mapViews;
                })),
                color: "#FF8000",
                visible: false
            }, false);
            chart.addSeries({
                name: "Chart views",
                data: (this.props.data.map((result) => {
                    return result.chartViews;
                })),
                color: "#FFFF00",
                visible: false
            }, false);
            chart.addSeries({
                name: "Report table views",
                data: (this.props.data.map((result) => {
                    return result.reportTablesViews;
                })),
                color: "#80FF00",
                visible: false
            }, false);
            chart.addSeries({
                name: "Event report views",
                data: (this.props.data.map((result) => {
                    return result.eventReportViews;
                })),
                color: "#00FF00",
                visible: false
            }, false);
            chart.addSeries({
                name: "Event chart views",
                data: (this.props.data.map((result) => {
                    return result.eventChartViews;
                })),
                color: "#00FF80",
                visible: false
            }, false);
            chart.addSeries({
                name: "Dashboard views",
                data: (this.props.data.map((result) => {
                    return result.dashboardViews;
                })),
                color: "#00FFFF",
                visible: false
            }, false);
            chart.addSeries({
                name: "Indicators views",
                data: (this.props.data.map((result) => {
                    return result.indicatorsViews;
                })),
                color: "#0080FF",
                visible: false
            }, false);
            chart.addSeries({
                name: "Average views",
                data: (this.props.data.map((result) => {
                    return result.averageViews;
                })),
                color: "#7F00FF",
                visible: false
            }, false);
            chart.addSeries({
                name: "Total views",
                data: (this.props.data.map((result) => {
                    return result.totalViews;
                })),
                color: "#0000FF",
                visible: true
            }, false);
        }
        else if (category == "Favorite saved") {
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
                color: "#00CC00"
            }, false);
            chart.addSeries({
                name: "Saved event charts",
                data: (this.props.data.map((result) => {
                    return result.savedEventCharts;
                })),
                color: "#00CC66"
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
            chart.addSeries({
                name: "Active users",
                data: (this.props.data.map((result) => {
                    return result.activeUsers;
                })),
                color: "#FF0000"
            }, false);

            chart.addSeries({
                name: "Total users",
                data: (this.props.data.map((result) => {
                    return result.users;
                })),
                color: "#CC0000"
            }, false);
        }

        chart.xAxis[0].update({categories: date}, true);
        chart.redraw();
    },

    setUpChart: function () {
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
        });

        this.drawChart(this.props.category);
    },

    config: {
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [],
        },
        title: {
            text: "Usage Analytics"
        }
    },

    _onChange: function (e, selected) {
        let chart = this.refs.chart.getChart();
        if (selected == "total") {
            chart.series[(chart.series.length - 1)].show();
        }
        else {
            chart.series[(chart.series.length - 1)].hide();
        }
        for (let i = chart.series.length - 2; i > -1; i--) {
            if (selected == "total") {
                chart.series[i].hide();
            }
            else {
                chart.series[i].show();
            }
        }
    },

    ViewPicker: function (category) {
        let isVisible = this.props.category != "Favorite Views" ? 'block' : 'none';;
        if(category != null){
            isVisible = category != "Favorite Views" ? 'block' : 'none';
        }

        let visible =  {
            visible: {
                display: isVisible
            }
        };
        console.log(visible.visible.display);
        return (
            <div style={visible.visible}>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected="total"
                    style={styles.block}
                    onChange={this._onChange}
                >
                    <RadioButton
                        value="total"
                        label="Only total views"
                    />
                    <RadioButton
                        value="all"
                        label="All favorite views"
                    />
                </RadioButtonGroup>
            </div>
        );
    },

    render(){
        var style = {
            minHeight: 600
        };

        return (
            <div>
                <ReactHighcharts config={this.config} style={style} ref="chart"/>
                {React.createElement(
                    'div',
                    {className: 'viewPicker'},
                    this.ViewPicker()
                )}
            </div>
        );
    }

});



