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
import TableWrapper from './TableWrapper.js'

const FavoritesSavedTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Maps')}</TableCellHead>
                    <TableCellHead>{i18n.t('Visualizations')}</TableCellHead>
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
                        savedVisualizations,
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
                                <TableCell>{savedVisualizations}</TableCell>
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
            savedDashboards: PropTypes.number.isRequired,
            savedEventCharts: PropTypes.number.isRequired,
            savedEventReports: PropTypes.number.isRequired,
            savedIndicators: PropTypes.number.isRequired,
            savedMaps: PropTypes.number.isRequired,
            savedVisualizations: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default FavoritesSavedTable
