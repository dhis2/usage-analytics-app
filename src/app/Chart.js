import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {render} from 'react-dom';


let title = 'Favorite views';
let subTitle = 'Number of times users looked at analysis favorites';
let colors = ["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC","#9900cc", "#0000FF"];
let count = 0;
let plotOptions = {};
let chartType = 'line';


export default React.createClass({

    componentDidUpdate: function () {

        this.drawChart();
    },

    componentDidMount: function () {

        this.drawChart();
    },

    drawChart: function () {
        let chart = this.refs.chart.getChart();
        let data = this.props.data;
        let date = [];
        chartType = 'line';
        if (chart.series.length > 0) {
            for (let i = chart.series.length - 1; i > -1; i--) {
                chart.series[i].remove();
            }
        }

        count = 0;
        for(var key in data[1] ){
            if(key == 'Date'){
                data.map(result => {return date.push(result[key])});
                chart.xAxis[0].update({categories: date});
            }
            else{
                chart.addSeries({
                    name: this.formatName(key),
                    data: (data.map((result) => {
                        return result[key];
                    })),
                    color: colors[count],
                    visible: true
                }, false);
                count++;
            }
        }

        if(count ==1){
            chartType = 'area';
        }

        chart.redraw();
    },

    formatName: function(key) {
            let keyString = key;
            let subOne = '';
            let index = keyString.indexOf('_');
            let startSlice = 0;
            if(index > -1) {
                while (index > -1) {

                    subOne = subOne + " "+ key.slice(startSlice, index).trim();
                    startSlice = index+1;
                    index = keyString.indexOf('_', index + 1);
                }
                subOne = subOne + " "+ key.slice(startSlice, key.length).trim();
            }else {
                subOne = key;
            }
        return subOne;
    },

    getConfig: function () {

        return {
            chart: {
                type: chartType
            },
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
            },
            yAxis: {min: 0
            },
            plotOptions: plotOptions

        };
    },



    render(){
        if (this.props.category != null) {
            title = this.props.category;
            if(title == 'Favorite views'){
                subTitle = 'Number of times users looked at analysis favorites';
            }
            else if(title == 'Favorite saved'){
                subTitle = 'Number of analysis favorites created by users';
            }
            else if(title == 'Users'){
                subTitle = 'Number of users in the system';
            }
            else if(title == 'Data values'){
                subTitle = 'Number of Data values saved in the system';
            }
        }
        console.log(ReactHighcharts);
        if(Object.keys(this.props.data[1]).length == 2){
            chartType = 'area';
            plotOptions =  {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                        },
                        stops: [
                             [0, '#7cb5ec'],
                             [1, 'rgba(124,181,236,0)']
                        ]
                    }

                }
            };
        }else {
            chartType = 'line';
            plotOptions = {};
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


