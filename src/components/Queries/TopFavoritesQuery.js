import React, { useEffect } from 'react'
import PropTypes from '@dhis2/prop-types'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader, ComponentCover, CenteredContent } from '@dhis2/ui'

const query = {
    favorites: {
        resource: 'dataStatistics/favorites',
        params: ({ eventType, pageSize, sortOrder }) => ({
            eventType,
            pageSize,
            sortOrder,
        }),
    },
}

const TopFavoritesQuery = ({ eventType, pageSize, sortOrder, children }) => {
    const { loading, error, data, called, refetch } = useDataQuery(query, {
        lazy: true,
        variables: {
            eventType,
            pageSize,
            sortOrder,
        },
    })

    useEffect(() => {
        refetch({ eventType, pageSize, sortOrder })
    }, [eventType, pageSize, sortOrder])

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
        throw error
    }

    return children(data.favorites)
}

TopFavoritesQuery.propTypes = {
    children: PropTypes.func.isRequired,
    eventType: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesQuery
