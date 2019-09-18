import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import UsageAnalytics from './UsageAnalytics'

function App() {
    return (
        <Provider store={store}>
            <UsageAnalytics />
        </Provider>
    )
}

export default App
