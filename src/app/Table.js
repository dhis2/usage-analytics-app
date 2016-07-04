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
    },
};

export default React.createClass({

    createRow: function (row) {
        let rows = [];
        let pos = 0;
        for (var key in row) {
            pos++;
            if(pos == 2 && key == "Name"){
                rows.push(<TableRowColumn width={ 450 } key={row[key]}>{row[key]}</TableRowColumn>);
            }
            else {
                rows.push(<TableRowColumn key={row[key]}>{row[key]}</TableRowColumn>);
            }
        }
        return (<TableRow>{rows}</TableRow>);

    },
    createHeaderRow: function (headers, category) {
        let rows = [];
        let pos = 0;
        let subOne = '';
        for (var key in headers) {
            pos++;
            subOne = '';
            let index = key.indexOf('_');
            let startSlice = 0;
            if(index > -1) {
                while (index > -1) {

                    subOne = subOne + " "+ key.slice(startSlice, index).trim();
                    startSlice = index+1;
                    index = key.indexOf('_', index + 1);

                }
                subOne = subOne + " "+ key.slice(startSlice, key.length).trim();
            }else {
                subOne = key;
            }
            if(pos == 2 && key == "Name") {
                rows.push(<TableHeaderColumn width={ 450 } style={style.header}><b>{subOne}</b></TableHeaderColumn>);
            }
            else{
                rows.push(<TableHeaderColumn style={style.header}><b>{subOne}</b></TableHeaderColumn>);
            }
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
