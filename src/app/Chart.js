import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {render} from 'react-dom';


let title = 'Favorite views';
let subTitle = 'Number of times users looked at analysis favorites';
let colors = ["#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC","#9900cc", "#0000FF"];

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

        if (chart.series.length > 0) {
            for (let i = chart.series.length - 1; i > -1; i--) {
                chart.series[i].remove();
            }
        }

        let count = 0;
        for(var key in data[1] ){
            if(key == 'date'){
                console.log("kom inn i if");
                data.map(result => {return date.push(result[key])});
                console.log(date);
                chart.xAxis[0].update({categories: date});
            }
            else{
                chart.addSeries({
                    name: key,
                    data: (data.map((result) => {
                        return result[key];
                    })),
                    color: colors[count],
                    visible: true
                }, false);
                count++;
            }
        }

        chart.redraw();
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
            },
        };
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


