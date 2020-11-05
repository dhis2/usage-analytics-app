import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import {
    Table,
    TableHead,
    TableRowHead,
    TableRow,
    TableCell,
    TableCellHead,
    TableBody,
} from '@dhis2/ui'
import { formatIntervalDate } from '../../utils/date.js'

const DataValuesTable = ({ data, interval }) => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>{i18n.t('Date')}</TableCellHead>
                <TableCellHead>{i18n.t('Data Values')}</TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            {data.map(({ year, month, week, day, savedDataValues }) => {
                const formatted = formatIntervalDate(
                    { year, month, week, day },
                    interval
                )

                return (
                    <TableRow key={formatted}>
                        <TableCell>{formatted}</TableCell>
                        <TableCell>{savedDataValues}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>
)

DataValuesTable.propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
}

export default DataValuesTable
