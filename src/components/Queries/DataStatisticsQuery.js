import React, { useEffect } from 'react'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import { useDataQuery } from '@dhis2/app-runtime'
import {
    CircularLoader,
    ComponentCover,
    CenteredContent,
    NoticeBox,
} from '@dhis2/ui'
import { validateDates } from './validators.js'

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
    countPassiveViews,
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
        const datesAreValid = validateDates(startDate, endDate)

        if (datesAreValid) {
            refetch({ startDate, endDate, interval, fields })
        }
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
        const title = i18n.t('Error whilst fetching data')
        const message = i18n.t('The error message was: "{{ MESSAGE }}".', {
            MESSAGE: error.message,
            nsSeparator: '>',
        })
        const fallback = i18n.t(
            'There was no error message included with the error.'
        )

        return (
            <NoticeBox error title={title}>
                {error.message ? message : fallback}
            </NoticeBox>
        )
    }

    if (countPassiveViews) {
        data.dataStatistics.forEach(item => {
            item.dashboardViews += item.passiveDashboardViews
            item.averageDashboardViews =
                (item.dashboardViews + item.passiveDashboardViews) / item.users
        })
    }

    return children(data.dataStatistics)
}

DataStatisticsQuery.propTypes = {
    children: PropTypes.func.isRequired,
    countPassiveViews: PropTypes.bool.isRequired,
    endDate: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DataStatisticsQuery
