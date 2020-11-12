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
                    data={data}
                    interval={interval}
                    category={category}
                />
                <UsersTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

UsersVisualization.propTypes = {
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default UsersVisualization
