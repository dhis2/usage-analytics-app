import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Provider } from 'react-redux'
import store from '../store'
import UsageAnalytics from './UsageAnalytics'

import 'typeface-roboto/index.css'

import { CssReset } from '@dhis2/ui-core'
import { HeaderBar } from '@dhis2/ui-widgets'
import { DataProvider } from '@dhis2/app-runtime'

const url = process.env.REACT_APP_DHIS2_BASE_URL

function App() {
    return (
        <DataProvider baseUrl={url} apiVersion="">
            <Provider store={store}>
                <CssReset />
                <HeaderBar appName={i18n.t('Usage Analytics')} />
                <UsageAnalytics />
            </Provider>
        </DataProvider>
    )
}

export default App
