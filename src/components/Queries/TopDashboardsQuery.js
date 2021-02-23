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
import { PASSIVE_DASHBOARD_VIEW } from '../../constants/eventTypes'

const query = {
    favorites: {
        resource: 'dataStatistics/favorites',
        params: ({ eventType, pageSize, sortOrder, fields }) => ({
            eventType,
            pageSize,
            sortOrder,
            fields,
        }),
    },
    passiveFavorites: {
        resource: 'dataStatistics/favorites',
        params: ({ pageSize, sortOrder, fields }) => ({
            eventType: PASSIVE_DASHBOARD_VIEW,
            pageSize,
            sortOrder,
            fields,
        }),
    },
}

const TopDashboardsQuery = ({
    countPassiveViews,
    eventType,
    pageSize,
    sortOrder,
    fields,
    children,
}) => {
    const { loading, error, data, called, refetch } = useDataQuery(query, {
        lazy: true,
        variables: {
            eventType,
            pageSize,
            sortOrder,
            fields,
        },
    })

    useEffect(() => {
        refetch({ eventType, pageSize, sortOrder, fields })
    }, [eventType, pageSize, sortOrder, fields])

    if (!called || loading) {
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
    if (countPassiveViews && data.passiveFavorites) {
        const passiveFavoritesHash = data.passiveFavorites.reduce(
            (hashMap, item) => {
                hashMap[item.id] = item.views
                return hashMap
            },
            {}
        )

        data.favorites.forEach(item => {
            item.views += passiveFavoritesHash[item.id] || 0
        })
    }

    return children(data.favorites)
}

TopDashboardsQuery.propTypes = {
    children: PropTypes.func.isRequired,
    countPassiveViews: PropTypes.bool.isRequired,
    eventType: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopDashboardsQuery
