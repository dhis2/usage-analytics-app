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
import PropTypes from 'prop-types'
import React from 'react'
import { getIntervalDate } from '../../selectors/date.js'
import TableWrapper from './TableWrapper.jsx'

const SumFavoriteViewsTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Map')}</TableCellHead>
                    <TableCellHead>{i18n.t('Visualization')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Report')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Chart')}</TableCellHead>
                    <TableCellHead>{i18n.t('Dashboard')}</TableCellHead>
                    <TableCellHead>{i18n.t('Data Set Report')}</TableCellHead>
                    <TableCellHead>{i18n.t('Total')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(
                    ({
                        year,
                        month,
                        week,
                        day,
                        mapViews,
                        visualizationViews,
                        eventReportViews,
                        eventChartViews,
                        dashboardViews,
                        dataSetReportViews,
                        totalViews,
                    }) => {
                        const intervalDate = getIntervalDate(
                            { year, month, week, day },
                            interval
                        )

                        return (
                            <TableRow key={intervalDate}>
                                <TableCell>{intervalDate}</TableCell>
                                <TableCell>{mapViews}</TableCell>
                                <TableCell>{visualizationViews}</TableCell>
                                <TableCell>{eventReportViews}</TableCell>
                                <TableCell>{eventChartViews}</TableCell>
                                <TableCell>{dashboardViews}</TableCell>
                                <TableCell>{dataSetReportViews}</TableCell>
                                <TableCell>{totalViews}</TableCell>
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </Table>
    </TableWrapper>
)

SumFavoriteViewsTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dashboardViews: PropTypes.number.isRequired,
            dataSetReportViews: PropTypes.number.isRequired,
            eventChartViews: PropTypes.number.isRequired,
            eventReportViews: PropTypes.number.isRequired,
            mapViews: PropTypes.number.isRequired,
            totalViews: PropTypes.number.isRequired,
            visualizationViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default SumFavoriteViewsTable
