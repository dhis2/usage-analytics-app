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

const AverageFavoriteViewsTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Average Map')}</TableCellHead>
                    <TableCellHead>{i18n.t('Average Chart')}</TableCellHead>
                    <TableCellHead>
                        {i18n.t('Average Pivot Table')}
                    </TableCellHead>
                    <TableCellHead>
                        {i18n.t('Average Event Report')}
                    </TableCellHead>
                    <TableCellHead>
                        {i18n.t('Average Event Chart')}
                    </TableCellHead>
                    <TableCellHead>{i18n.t('Average Dashboard')}</TableCellHead>
                    <TableCellHead>{i18n.t('Average')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(
                    ({
                        year,
                        month,
                        week,
                        day,
                        averageMapViews,
                        averageChartViews,
                        averagePivotTableViews,
                        averageEventReportViews,
                        averageEventChartViews,
                        averageDashboardViews,
                    }) => {
                        const total =
                            averageMapViews +
                            averageChartViews +
                            averagePivotTableViews +
                            averageEventReportViews +
                            averageEventChartViews +
                            averageDashboardViews
                        const intervalDate = getIntervalDate(
                            { year, month, week, day },
                            interval
                        )

                        return (
                            <TableRow key={intervalDate}>
                                <TableCell>{intervalDate}</TableCell>
                                <TableCell>{averageMapViews}</TableCell>
                                <TableCell>{averageChartViews}</TableCell>
                                <TableCell>{averagePivotTableViews}</TableCell>
                                <TableCell>{averageEventReportViews}</TableCell>
                                <TableCell>{averageEventChartViews}</TableCell>
                                <TableCell>{averageDashboardViews}</TableCell>
                                <TableCell>{total}</TableCell>
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </Table>
    </TableWrapper>
)

AverageFavoriteViewsTable.propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
}

export default AverageFavoriteViewsTable
