import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { FavoritesSavedTable } from '../Tables'
import { FavoritesSavedChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const fields = [
    'year',
    'month',
    'week',
    'day',
    'savedMaps',
    'savedCharts',
    'savedPivotTables',
    'savedEventReports',
    'savedEventCharts',
    'savedDashboards',
    'savedIndicators',
]

const FavoritesSavedVisualization = ({
    category,
    endDate,
    interval,
    isIntervalStale,
    setIsIntervalStale,
    startDate,
}) => (
    <DataStatisticsQuery
        endDate={endDate}
        fields={fields}
        interval={interval}
        isIntervalStale={isIntervalStale}
        setIsIntervalStale={setIsIntervalStale}
        startDate={startDate}
    >
        {data => (
            <Fragment>
                <FavoritesSavedChart
                    category={category}
                    data={data}
                    interval={interval}
                />
                <FavoritesSavedTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

FavoritesSavedVisualization.propTypes = {
    category: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FavoritesSavedVisualization
