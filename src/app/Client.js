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

/*
 <Table
 rowHeight={50}
 rowsCount={rows.length}
 width={5000}
 height={5000}
 headerHeight={50}>
 <Column
 header={<Cell>Col 1</Cell>}
 cell={<Cell>Column 1 static content</Cell>}
 width={2000}
 />
 <Column
 header={<Cell>Col 2</Cell>}
 cell={<MyCustomCell mySpecialProp="column2" />}
 width={1000}
 />
 <Column
 header={<Cell>Col 3</Cell>}
 cell={({rowIndex, ...props}) => (
 <Cell {...props}>
 Data for column 3: {rows[rowIndex][2]}
 </Cell>
 )}
 width={2000}
 />
 </Table>
 */