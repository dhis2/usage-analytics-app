import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { DataValuesTable } from '../Tables'
import { DataValuesChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const fields = ['year', 'month', 'week', 'day', 'savedDataValues']

const DataValuesVisualization = ({
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
                <DataValuesChart
                    category={category}
                    data={data}
                    interval={interval}
                />
                <DataValuesTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

DataValuesVisualization.propTypes = {
    category: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataValuesVisualization
