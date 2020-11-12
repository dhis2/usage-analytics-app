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
                    data={data}
                    interval={interval}
                    category={category}
                />
                <FavoritesSavedTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

FavoritesSavedVisualization.propTypes = {
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default FavoritesSavedVisualization
