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

const DataStatisticsQuery = ({
    startDate,
    endDate,
    interval,
    stale,
    setStale,
    children,
}) => {
    const onDone = () => setStale(false)
    const { loading, error, data, called, refetch } = useDataQuery(query, {
        lazy: true,
        variables: {
            startDate,
            endDate,
            interval,
        },
        onComplete: onDone,
        onError: onDone,
    })

    useEffect(() => {
        refetch({ startDate, endDate, interval })
    }, [startDate, endDate, interval])

    if (!called || loading || stale) {
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
    setStale: PropTypes.func.isRequired,
    stale: PropTypes.bool.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataStatisticsQuery
