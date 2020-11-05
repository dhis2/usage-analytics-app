import React, { useContext } from 'react'
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
import { getDisplayDateForInterval } from '../../utils/date.js'
import { LocaleContext } from '../Locale'

const DataValuesTable = ({ data, interval }) => {
    const locale = useContext(LocaleContext)

    return (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Data Values')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(({ year, month, week, day, savedDataValues }) => {
                    const timestamp = getDisplayDateForInterval(
                        { year, month, week, day },
                        interval,
                        locale
                    )

                    return (
                        <TableRow key={timestamp}>
                            <TableCell>{timestamp}</TableCell>
                            <TableCell>{savedDataValues}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

DataValuesTable.propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
}

export default DataValuesTable
