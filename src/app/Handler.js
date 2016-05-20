/**
 * Created by JulieHillRoa on 21.04.2016.
 */
import React from 'react';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';


import Table from './Table';
import Chart from './Chart';


const styles = {
    block: {
        maxWidth: 305,
        marginRight: 'auto',
        // marginLeft: '25%',
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

let isVisible = 'block';
let category = "Favorite views";
let tableData = [];

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, subCategory: 'allFav', renderData: undefined};
    },

    componentWillReceiveProps: function (nextprops) {
        category = nextprops.category;
        this.setState({renderData: this.splitData("allFav")});

    },

    componentWillMount: function () {
        category = this.props.category;
        this.setState({renderData: this.splitData("allFav")});
    },


    _onChange: function (e, selected) {
        this.setState({renderData: this.splitData(selected)});
    },

    getDate: function (year, month, week, day) {
        let date = year;
        if (month != null) {
            let monthText = '';
            if (month == 1) {
                monthText = ' jan ';
            }
            else if (month == 2) {
                monthText = ' feb ';
            }
            else if (month == 3) {
                monthText = ' mar ';
            }
            else if (month == 4) {
                monthText = ' apr ';
            }
            else if (month == 5) {
                monthText = ' may ';
            }
            else if (month == 6) {
                monthText = ' jun ';
            }
            else if (month == 7) {
                monthText = ' jul ';
            }
            else if (month == 8) {
                monthText = ' aug ';
            }
            else if (month == 9) {
                monthText = ' sep ';
            }
            else if (month == 10) {
                monthText = ' oct ';
            }
            else if (month == 11) {
                monthText = ' nov ';
            }
            else if (month == 12) {
                monthText = ' dec ';
            }

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

    splitData: function (selected) {
        let tmpDataChart = [];
        tableData = [];

        if (category == "Favorite views") {
            if (selected == "allFav" || selected == "total"){
                this.props.data.filter((val) => {
                    return (tableData.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        MapViews: val.mapViews,
                        ChartViews: val.chartViews,
                        ReportTableViews: val.reportTableViews,
                        EventReportViews: val.eventReportViews,
                        EventChartViews: val.eventChartViews,
                        DashboardViews: val.dashboardViews,
                        DataSetReportViews: val.dataSetReportViews,
                        TotalViews: val.totalViews
                    }))
                })
            }

            if (selected == "average" || selected == "averageTotal"){
                this.props.data.filter((val) => {
                    return (tableData.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        AverageMapViews: val.averageMapViews,
                        AverageChartViews: val.averageChartViews,
                        AverageReportTableViews: val.averageReportTableViews,
                        AverageEventReportViews: val.averageEventReportViews,
                        AverageEventChartViews: val.averageEventChartViews,
                        AverageDashboardViews: val.averageDashboardViews,
                        AverageViews: val.averageViews
                    }))
                })
            }
            if (selected == "allFav") {
                this.props.data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        MapViews: val.mapViews,
                        ChartViews: val.chartViews,
                        ReportTableViews: val.reportTableViews,
                        EventReportViews: val.eventReportViews,
                        EventChartViews: val.eventChartViews,
                        DashboardViews: val.dashboardViews,
                        DataSetReportViews: val.dataSetReportViews,
                    }))
                })
            }

            else if (selected == "total") {
                this.props.data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        TotalViews: val.totalViews
                    }))
                })
            }

            else if (selected == "average") {
                this.props.data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        AverageMapViews: val.averageMapViews,
                        AverageChartViews: val.averageChartViews,
                        AverageReportTableViews: val.averageReportTableViews,
                        AverageEventReportViews: val.averageEventReportViews,
                        AverageEventChartViews: val.averageEventChartViews,
                        AverageDashboardViews: val.averageDashboardViews
                    }))
                })
            }

            else if (selected == "averageTotal") {
                this.props.data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        AverageViews: val.averageViews
                    }))
                })
            }
        }

        else if(category == "Favorite saved"){
            this.props.data.filter((val) => {
                tmpDataChart.push({
                    Date: this.getDate(val.year, val.month, val.week, val.day),
                    SavedMaps: val.savedMaps,
                    SavedCharts: val.savedCharts,
                    SavedReportTables: val.savedReportTables,
                    SavedEventReports: val.savedEventReports,
                    SavedEventCharts: val.savedEventCharts,
                    SavedDashboards: val.savedDashboards,
                    SavedIndicators: val.savedIndicators
                })
            });
            tableData = tmpDataChart;
        }

        else if(category == "Users"){
            this.props.data.filter((val) => {
                tmpDataChart.push({
                    Date: this.getDate(val.year, val.month, val.week, val.day),
                    ActiveUsers: val.activeUsers,
                    TotalUsers: val.users
                })
            });
            tableData = tmpDataChart;
        }

        return tmpDataChart;
    },

    ViewPicker: function (category) {

        return (
            <div style={styles.visible}>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected="allFav"
                    style={styles.block}
                    onChange={this._onChange}
                >
                    <RadioButton
                        value="allFav"
                        label="All favorite views"
                    />
                    <RadioButton
                        value="total"
                        label="Total views"
                    />
                    <RadioButton
                        value="average"
                        label="All favorite average views per user"
                    />
                    <RadioButton
                        value="averageTotal"
                        label="Total views per user"
                    />
                </RadioButtonGroup>
            </div>
        );
    },

    render(){
        this.props.category == "Favorite views" ? isVisible = 'block' : isVisible = 'none';
        return (
            <div>
                <Chart data={this.state.renderData} category={category}/>
                {
                    isVisible == 'block' ? this.ViewPicker() : null
                }
                <Table data={tableData} category={category}/>
            </div>
        );
    }
});
