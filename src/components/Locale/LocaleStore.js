import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { useDataQuery } from '@dhis2/app-runtime'
import LocaleContext from './LocaleContext.js'
import { getLocale } from './selectors'

const query = {
    userSettings: {
        resource: 'userSettings',
    },
}

const LocaleStore = ({ children }) => {
    const { loading, error, data } = useDataQuery(query)

    if (loading) {
        return 'Loading'
    }

    if (error) {
        return error.message
    }

    const locale = getLocale(data.userSettings)

    if (!locale) {
        return 'Could not find a locale'
    }

    return (
        <LocaleContext.Provider value={locale}>
            {children}
        </LocaleContext.Provider>
    )
}

LocaleStore.propTypes = {
    children: PropTypes.node,
}

export default LocaleStore
