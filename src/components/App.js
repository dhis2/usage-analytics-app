import React from 'react'
import { Provider } from 'react-redux'
import { useConfig } from '@dhis2/app-runtime'
import store from '../store'
import api from '../api'
import UsageAnalytics from './UsageAnalytics'
import '../index.css'

function App() {
    const { baseUrl } = useConfig()
    api.setBaseUrl(baseUrl)

    return (
        <Provider store={store}>
            <UsageAnalytics />
        </Provider>
    )
}

export default App
