import React from 'react'
import i18n from '@dhis2/d2-i18n'
import styles from './AppTitle.module.css'

const AppTitle = () => (
    <h1 className={styles.title}>{i18n.t('Usage Analytics')}</h1>
)

export default AppTitle
