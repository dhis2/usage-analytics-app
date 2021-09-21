import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { UsersChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import { UsersTable } from '../Tables/index.js'

const fields = ['year', 'month', 'week', 'day', 'activeUsers', 'users']

const UsersVisualization = ({
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
                <UsersChart data={data} interval={interval} />
                <UsersTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

UsersVisualization.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default UsersVisualization
