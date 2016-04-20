import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {render} from 'react-dom';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

let date = [];
let isVisible = 'block';
let title = 'Favorite views';

const styles = {
    block: {
        maxWidth: 250,
        marginRight: 'auto',
        marginLeft: '25%',
        display: 'flex',
        flexDirection: 'row'
    },
    visible: {
        display: isVisible,
        padding: 5,
        marginTop: 20,
        border: 'solid',
        borderColor: '#000000',
        borderWidth: 0.5
    }
};

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
            }
        };
    },

    _onChange: function (e, selected) {
        let chart = this.refs.chart.getChart();
        if (selected == "total") {
            chart.series[(chart.series.length - 1)].show();
            chart.series[(chart.series.length - 2)].hide();
        }
        else if(selected == "average"){
            chart.series[(chart.series.length - 2)].show();
            chart.series[(chart.series.length - 1)].hide();
        }
        else {
            chart.series[(chart.series.length - 1)].hide();
            chart.series[(chart.series.length - 2)].hide();
        }
        for (let i = chart.series.length - 3; i > -1; i--) {
            if (selected == "total"  || selected == "average"  ) {
                chart.series[i].hide();
            }
            else {
                chart.series[i].show();
            }
        }
    },

    ViewPicker: function (category) {

        return (
            <div style={styles.visible}>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected="all"
                    style={styles.block}
                    onChange={this._onChange}
                >
                    <RadioButton
                        value="all"
                        label="All favorite views"
                    />
                    <RadioButton
                        value="average"
                        label="Average views per user"
                    />
                    <RadioButton
                        value="total"
                        label="Total views"
                    />
                </RadioButtonGroup>
            </div>
        );
    },

    render(){
        if (this.props.category != null) {
            title = this.props.category;
            this.props.category == "Favorite Views" ? isVisible = 'block' : isVisible = 'none';
        }
        var style = {
            minHeight: 600
        };

        return (
            <div>
                <ReactHighcharts config={this.getConfig()} style={style} ref="chart"/>
                {
                    isVisible == 'block' ? this.ViewPicker() : null
                }
            </div>
        );
    }

});


