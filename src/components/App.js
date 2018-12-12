import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Provider } from 'react-redux'
import UI from 'ui/core/UI'
import Headerbar from 'ui/widgets/HeaderBar'
import store from '../store'
import UsageAnalitics from './UsageAnalytics'

function App() {
    return (
        <Provider store={store}>
            <UI>
                <Headerbar appName={i18n.t('Usage Analytics')} />
                <UsageAnalitics />
            </UI>
        </Provider>
    )
}

export default App
