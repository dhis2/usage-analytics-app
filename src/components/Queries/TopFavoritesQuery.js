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
        const message = i18n.t(
            'The error message was: "{{ ERROR_MESSAGE }}".',
            {
                ERROR_MESSAGE: error.message,
                nsSeparator: '>',
            }
        )
        const fallback = i18n.t(
            'There was no error message included with the error.'
        )

        return (
            <NoticeBox error title={title}>
                {error.message ? message : fallback}
            </NoticeBox>
        )
    }

    return children(data.favorites)
}

TopFavoritesQuery.propTypes = {
    children: PropTypes.func.isRequired,
    eventType: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesQuery
