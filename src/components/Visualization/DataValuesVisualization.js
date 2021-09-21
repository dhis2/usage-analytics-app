import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { DataValuesChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import { DataValuesTable } from '../Tables/index.js'

const fields = ['year', 'month', 'week', 'day', 'savedDataValues']

const DataValuesVisualization = ({
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
                <DataValuesChart data={data} interval={interval} />
                <DataValuesTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

DataValuesVisualization.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataValuesVisualization
