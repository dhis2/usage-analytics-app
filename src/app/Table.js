import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const style = {
    header: {
        fontSize: 15,
        color: '#000000',
        backgroundColor: '#f3f3f3'
    }
};

export default React.createClass({

    createRow: function (row) {
        let rows = [];

        for (var key in row) {
            rows.push(<TableRowColumn key={row[key]}>{row[key]}</TableRowColumn>);
        }

        return (<TableRow>{rows}</TableRow>);

    },
    createHeaderRow: function (headers, category) {
        let rows = [];
        let subOne = '';
        let subTwo = '';
        let subTree = '';
        for (var key in headers) {
            if (key != 'Date') {
                if (category == "Favorite views") {
                    let index = key.indexOf('Views');
                    if(key.indexOf('Average') > -1){
                        subOne = key.slice(0, 7).trim();
                        subTwo = key.slice(7, index).trim();
                    }
                    else{
                        subOne = key.slice(0, index).trim();
                    }

                } else if (category == "Favorite saved") {
                    subOne = key.slice(5, key.length).trim();
                } else if (category == "Users") {
                    let index = key.indexOf('Users');
                    subOne = key.slice(0, index).trim();
                    subTwo = key.slice(index, key.length).trim();

                }else if(category == "Top favorites"){
                    subOne = key;
                }
            }else {
                subOne = key;
            }
            rows.push(<TableHeaderColumn style={style.header}><b>{subOne} {subTwo} {subTree}</b></TableHeaderColumn>);
        }
        return ( <TableRow>{rows}</TableRow>);
    },

    createTable: function () {
        let input = this.props.data;
        return ( <Table fixedHeader={true}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    {this.createHeaderRow(input[0], this.props.category)}
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {input.map((value, index, collection) => this.createRow(value))}
                </TableBody>
            </Table>
        );
    },

    render(){
        return <div style={ {marginTop: 50}}>{this.createTable()}</div>;
    }

});
