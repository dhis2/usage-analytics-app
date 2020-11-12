import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { UsersTable } from '../Tables'
import { UsersChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const fields = ['year', 'month', 'week', 'day', 'activeUsers', 'users']

const UsersVisualization = ({
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
                <UsersChart
                    category={category}
                    data={data}
                    interval={interval}
                />
                <UsersTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

UsersVisualization.propTypes = {
    category: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default UsersVisualization
