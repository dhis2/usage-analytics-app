/**
 * Created by JulieHillRoa on 14.03.2016.
 */

import React from 'react';
import Table from './Table';
import Chart from './Chart';

export default React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.source,
            dataType: 'json',
            cache: false,
            success: function(data) {
                let roundData = data.map((result) => {
                    for(let x in result){
                        result[x] = Math.round(result[x] * 100) / 100;
                    }
                    return result;
                });
                this.setState({data: roundData});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        console.log("I Client:");
        console.log(this.state.data);
        if(this.state.data.length != 0){
            return (
                <div>
                    <Chart data={this.state.data}/>
                    <Table data={this.state.data}/>
                </div>
            );
        }
        else return null;
    }
});