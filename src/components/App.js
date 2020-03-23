import React, { useMemo } from 'react'
import { Provider } from 'react-redux'
import { useConfig } from '@dhis2/app-runtime'
import initStore from '../store'
import UsageAnalytics from './UsageAnalytics'
import '../index.css'

function App() {
    const { baseUrl } = useConfig()

    const store = useMemo(() => initStore({ baseUrl }), [baseUrl])

    return (
        <Provider store={store}>
            <UsageAnalytics />
        </Provider>
    )
}

export default App
