import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Provider } from 'react-redux'
import Headerbar from '@dhis2/ui/widgets/HeaderBar'
import store from '../store'
import UsageAnalytics from './UsageAnalytics'

import 'typeface-roboto/index.css'
import '@dhis2/ui/css/reset.css'

function App() {
    return (
        <Provider store={store}>
            <Headerbar appName={i18n.t('Usage Analytics')} />
            <UsageAnalytics />
        </Provider>
    )
}

export default App
