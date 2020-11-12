import React, { useEffect } from 'react'
import PropTypes from '@dhis2/prop-types'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader, ComponentCover, CenteredContent } from '@dhis2/ui'

const query = {
    dataStatistics: {
        resource: 'dataStatistics',
        params: ({ startDate, endDate, interval, fields }) => ({
            startDate,
            endDate,
            interval,
            fields,
        }),
    },
}

const DataStatisticsQuery = ({
    children,
    endDate,
    fields,
    interval,
    isIntervalStale,
    setIsIntervalStale,
    startDate,
}) => {
    const onDone = () => setIsIntervalStale(false)
    const { loading, error, data, called, refetch } = useDataQuery(query, {
        lazy: true,
        variables: {
            startDate,
            endDate,
            interval,
            fields,
        },
        onComplete: onDone,
        onError: onDone,
    })

    useEffect(() => {
        refetch({ startDate, endDate, interval, fields })
    }, [startDate, endDate, interval, fields])

    if (!called || loading || isIntervalStale) {
        return (
            <ComponentCover>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </ComponentCover>
        )
    }

    if (error) {
        throw error
    }

    return children(data.dataStatistics)
}

DataStatisticsQuery.propTypes = {
    children: PropTypes.func.isRequired,
    endDate: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataStatisticsQuery
