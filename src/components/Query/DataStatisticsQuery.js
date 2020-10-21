import React, { useEffect } from 'react'
import PropTypes from '@dhis2/prop-types'
import { useDataQuery } from '@dhis2/app-runtime'

const query = {
    dataStatistics: {
        resource: 'dataStatistics',
        params: ({ startDate, endDate, interval }) => ({
            startDate,
            endDate,
            interval,
        }),
    },
}

const DataStatisticsQuery = ({ startDate, endDate, interval, children }) => {
    const { loading, error, data, called, refetch } = useDataQuery(query, {
        lazy: true,
        variables: {
            startDate,
            endDate,
            interval,
        },
    })

    useEffect(() => {
        refetch({ startDate, endDate, interval })
    }, [startDate, endDate, interval])

    if (!called || loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>{error.message || 'Error'}</div>
    }

    return children(data.dataStatistics)
}

DataStatisticsQuery.propTypes = {
    children: PropTypes.func.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataStatisticsQuery
