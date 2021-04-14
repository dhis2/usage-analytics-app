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
import { DASHBOARD_VIEW } from '../../constants/eventTypes.js'

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
            eventType: 'PASSIVE_DASHBOARD_VIEW',
            pageSize,
            sortOrder,
            fields,
        }),
    },
    systemSettings: {
        resource: 'systemSettings',
        params: {
            key: 'keyCountPassiveDashboardViewsInUsageAnalytics',
        },
    },
}

const TopFavoritesQuery = ({
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

    const {
        systemSettings: {
            keyCountPassiveDashboardViewsInUsageAnalytics: countPassiveViews,
        },
        passiveFavorites,
        favorites,
    } = data

    // If passive views should be counted, return statistics that include passive views in the totals
    if (countPassiveViews && eventType === DASHBOARD_VIEW) {
        const passiveViewsById = passiveFavorites.reduce(
            (acc, passiveFavorite) => {
                acc[passiveFavorite.id] = passiveFavorite.views
                return acc
            },
            {}
        )

        const withPassiveViews = favorites.map(f => {
            if (f.id in passiveViewsById) {
                return {
                    ...f,
                    views: f.views + passiveViewsById[f.id],
                }
            }

            return f
        })

        return children(withPassiveViews)
    }

    return children(favorites)
}

TopFavoritesQuery.propTypes = {
    children: PropTypes.func.isRequired,
    eventType: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesQuery
