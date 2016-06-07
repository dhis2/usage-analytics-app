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
let data;

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, subCategory: 'allFav', renderData: undefined};
    },

    componentWillReceiveProps: function (nextprops) {
        category = nextprops.category;
        data = nextprops.data;;
        if(category == "Top favorites"){
            this.setState({renderData: data});
        }
        else {
            this.setState({renderData: this.splitData("allFav")});
        }


    },
    componentWillMount: function () {
        category = this.props.category;
        data = this.props.data;
        if(category == "Top favorites"){
            this.setState({renderData: data});
        }
        else {
            this.setState({renderData: this.splitData("allFav")});
        }
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
                data.filter((val) => {
                    return (tableData.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Map: val.mapViews,
                        Chart: val.chartViews,
                        Pivot_Table: val.pivotTableViews,
                        Event_Report: val.eventReportViews,
                        Event_Chart: val.eventChartViews,
                        Dashboard: val.dashboardViews,
                        Data_Set_Report: val.dataSetReportViews,
                        Total: val.totalViews
                    }))
                })
            }
            if (selected == "average" || selected == "averageTotal"){
                data.filter((val) => {
                    return (tableData.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Average_Map: val.averageMapViews,
                        Average_Chart: val.averageChartViews,
                        Average_Report_Table: val.averageReportTableViews,
                        Average_Event_Report: val.averageEventReportViews,
                        Average_Event_Chart: val.averageEventChartViews,
                        Average_Dashboard: val.averageDashboardViews,
                        Average: val.averageViews
                    }))
                })
            }
            if (selected == "allFav") {
                data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Map: val.mapViews,
                        Chart: val.chartViews,
                        Pivot_Table: val.pivotTableViews,
                        Event_Report: val.eventReportViews,
                        Event_Chart: val.eventChartViews,
                        Dashboard: val.dashboardViews,
                        Data_Set_Report: val.dataSetReportViews,
                    }))
                })
            }
            else if (selected == "total") {
                data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Total: val.totalViews
                    }))
                })
            }

            else if (selected == "average") {
                data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Average_Map: val.averageMapViews,
                        Average_Chart: val.averageChartViews,
                        Average_Pivot_Table: val.averageReportTableViews,
                        Average_Event_Report: val.averageEventReportViews,
                        Average_Event_Chart: val.averageEventChartViews,
                        Average_Dashboard: val.averageDashboardViews
                    }))
                })
            }

            else if (selected == "averageTotal") {
                data.filter((val) => {
                    return (tmpDataChart.push({
                        Date: this.getDate(val.year, val.month, val.week, val.day),
                        Average: val.averageViews
                    }))
                })
            }
        }

        else if(category == "Favorite saved"){
            data.filter((val) => {
                tmpDataChart.push({
                    Date: this.getDate(val.year, val.month, val.week, val.day),
                    Maps: val.savedMaps,
                    Charts: val.savedCharts,
                    Pivot_Tables: val.savedPivotTables,
                    Event_Reports: val.savedEventReports,
                    Event_Charts: val.savedEventCharts,
                    Dashboards: val.savedDashboards,
                    Indicators: val.savedIndicators
                })
            });
            tableData = tmpDataChart;
        }

        else if(category == "Users"){
            data.filter((val) => {
                tmpDataChart.push({
                    Date: this.getDate(val.year, val.month, val.week, val.day),
                    Active_users: val.activeUsers,
                    Total_users: val.users
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
        if(category == 'Top favorites'){
            return  <Table data={data} category={category}/>
        }
        else {
            category == "Favorite views" ? isVisible = 'block' : isVisible = 'none';
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
    }
});
