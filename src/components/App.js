import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Provider } from 'react-redux'
import Headerbar from '@dhis2/ui/widgets/HeaderBar'
import store from '../store'
import UsageAnalitics from './UsageAnalytics'

import 'typeface-roboto/index.css'
import '@dhis2/ui/defaults/reset.css'
import '@dhis2/ui/defaults/common.css'

function App() {
    return (
        <Provider store={store}>
            <Headerbar appName={i18n.t('Usage Analytics')} />
            <UsageAnalitics />
        </Provider>
    )
}

export default App
