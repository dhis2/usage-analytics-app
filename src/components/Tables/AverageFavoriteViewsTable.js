import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import {
    Table,
    TableHead,
    TableRowHead,
    TableRow,
    TableCell,
    TableCellHead,
    TableBody,
} from '@dhis2/ui'
import React from 'react'
import { getIntervalDate } from '../../selectors/date.js'
import TableWrapper from './TableWrapper.js'

const AverageFavoriteViewsTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Average Map')}</TableCellHead>
                    <TableCellHead>
                        {i18n.t('Average Visualization')}
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
                        averageVisualizationViews,
                        averageEventReportViews,
                        averageEventChartViews,
                        averageDashboardViews,
                        averageViews,
                    }) => {
                        const intervalDate = getIntervalDate(
                            { year, month, week, day },
                            interval
                        )

                        return (
                            <TableRow key={intervalDate}>
                                <TableCell>{intervalDate}</TableCell>
                                <TableCell>{averageMapViews}</TableCell>
                                <TableCell>
                                    {averageVisualizationViews}
                                </TableCell>
                                <TableCell>{averageEventReportViews}</TableCell>
                                <TableCell>{averageEventChartViews}</TableCell>
                                <TableCell>{averageDashboardViews}</TableCell>
                                <TableCell>{averageViews}</TableCell>
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </Table>
    </TableWrapper>
)

AverageFavoriteViewsTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            averageDashboardViews: PropTypes.number.isRequired,
            averageEventChartViews: PropTypes.number.isRequired,
            averageEventReportViews: PropTypes.number.isRequired,
            averageMapViews: PropTypes.number.isRequired,
            averageViews: PropTypes.number.isRequired,
            averageVisualizationViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default AverageFavoriteViewsTable
