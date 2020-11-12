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
import { getIntervalDate } from '../../selectors/date.js'
import TableWrapper from './TableWrapper.js'

const FavoritesSavedTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Maps')}</TableCellHead>
                    <TableCellHead>{i18n.t('Charts')}</TableCellHead>
                    <TableCellHead>{i18n.t('Pivot Tables')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Reports')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Charts')}</TableCellHead>
                    <TableCellHead>{i18n.t('Dashboards')}</TableCellHead>
                    <TableCellHead>{i18n.t('Indicators')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(
                    ({
                        year,
                        month,
                        week,
                        day,
                        savedMaps,
                        savedCharts,
                        savedPivotTables,
                        savedEventReports,
                        savedEventCharts,
                        savedDashboards,
                        savedIndicators,
                    }) => {
                        const intervalDate = getIntervalDate(
                            { year, month, week, day },
                            interval
                        )

                        return (
                            <TableRow key={intervalDate}>
                                <TableCell>{intervalDate}</TableCell>
                                <TableCell>{savedMaps}</TableCell>
                                <TableCell>{savedCharts}</TableCell>
                                <TableCell>{savedPivotTables}</TableCell>
                                <TableCell>{savedEventReports}</TableCell>
                                <TableCell>{savedEventCharts}</TableCell>
                                <TableCell>{savedDashboards}</TableCell>
                                <TableCell>{savedIndicators}</TableCell>
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </Table>
    </TableWrapper>
)

FavoritesSavedTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            savedCharts: PropTypes.number.isRequired,
            savedDashboards: PropTypes.number.isRequired,
            savedEventCharts: PropTypes.number.isRequired,
            savedEventReports: PropTypes.number.isRequired,
            savedIndicators: PropTypes.number.isRequired,
            savedMaps: PropTypes.number.isRequired,
            savedPivotTables: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default FavoritesSavedTable
