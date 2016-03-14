/**
 * Created by JulieHillRoa on 14.03.2016.
 */
import React from 'react';
import ReactHighcharts from 'react-highcharts';

export default React.createClass({


    config: {
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }]
    },

    render(){
        return <ReactHighcharts config={this.config}></ReactHighcharts>
    }

});



