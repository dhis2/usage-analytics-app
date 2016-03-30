/**
 * Created by yrjanaff on 29.03.2016.
 */

import React from 'react';
import MaterialTable from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import Spacing from 'material-ui/lib/styles/spacing';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import TextField from 'material-ui/lib/text-field';
import Toggle from 'material-ui/lib/toggle';
import {Table, Column, Cell} from 'fixed-data-table';

const styles = {
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.blue500,
        primary2Color: Colors.blue700,
        primary3Color: Colors.lightBlack,
        accent1Color: '#276696',
        accent2Color: '#E9E9E9',
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
    }
};

/*const TextCell = ({rowIndex, data, col, ...props}) => (
    data.map((result) =>
        <Cell {...props}>
            {result.year}
        </Cell>
    )
);*/

export default React.createClass({

    render: function() {

        return (
            <Table
                rowHeight={50}
                rowsCount={this.props.data.length}
                width={5000}
                height={5000}
                headerHeight={50}
            >

            </Table>
        );
    }
});