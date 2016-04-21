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
let category = "Favorite Views";
let subCategory ="all";

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, subCategory: 'allFav', renderData: undefined};
    },

    componentWillReceiveProps: function (nextprops) {
        console.log(nextprops);
        category = nextprops.category;
    },

    componentWillMount: function () {
        category = this.props.category;
        this.setState({renderData: this.splitData("allFav")});
    },


    _onChange: function (e, selected) {
        this.setState({renderData: this.splitData(selected)});

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

    splitData: function(selected){
        let tmpData = [];

        if(selected == "allFav"){
            this.props.data.filter((val) => {
                return (tmpData.push({
                    date: this.getDate(val.year, val.month, val.week, val.day),
                    mapViews: val.mapViews,
                    chartViews: val.chartViews,
                    reportTableViews: val.reportTableViews,
                    eventReportViews: val.eventReportViews,
                    eventChartViews: val.eventChartViews,
                    dashboardViews: val.dashboardViews
                }))
            })
        }

        else if(selected == "total"){
            this.props.data.filter((val) => {
                return (tmpData.push({
                    date: this.getDate(val.year, val.month, val.week, val.day),
                    totalViews: val.totalViews
                }))
            })
        }

        else if(selected == "average"){
            this.props.data.filter((val) => {
                return (tmpData.push({
                    date: this.getDate(val.year, val.month, val.week, val.day),
                    averageMapViews: val.averageMapViews,
                    averageChartViews: val.averageChartViews,
                    averageReportTableViews: val.averageReportTableViews,
                    averageEventReportViews: val.averageEventReportViews,
                    averageEventChartViews: val.averageEventChartViews,
                    averageDashboardViews: val.averageDashboardViews
                }))
            })
        }

        else if(selected == "averageTotal"){
            this.props.data.filter((val) => {
                return (tmpData.push({
                    date: this.getDate(val.year, val.month, val.week, val.day),
                    averageViews: val.averageViews
                }))
            })
        }

        return tmpData;
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
        console.log("render");
        console.log(this.state.renderData);
        this.props.category == "Favorite Views" ? isVisible = 'block' : isVisible = 'none';
            return (
                <div>
                    <Chart data={this.props.data} category={category}/>
                    {
                        isVisible == 'block' ? this.ViewPicker() : null
                    }

                </div>
            );
        //<Table data={this.state.renderData} category={category}/>
    }
});
