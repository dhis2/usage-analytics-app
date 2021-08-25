import PropTypes from '@dhis2/prop-types'
import React, { Fragment } from 'react'
import { FavoritesSavedChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import { FavoritesSavedTable } from '../Tables/index.js'

const fields = [
    'year',
    'month',
    'week',
    'day',
    'savedMaps',
    'savedVisualizations',
    'savedEventReports',
    'savedEventCharts',
    'savedDashboards',
    'savedIndicators',
]

const FavoritesSavedVisualization = ({
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
                <FavoritesSavedChart data={data} interval={interval} />
                <FavoritesSavedTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

FavoritesSavedVisualization.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FavoritesSavedVisualization
