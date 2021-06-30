import PropTypes from '@dhis2/prop-types'
import React from 'react'
import styles from './LayoutContainer.module.css'

const LayoutContainer = ({ children }) => (
    <main className={styles.container}>{children}</main>
)

LayoutContainer.propTypes = {
    children: PropTypes.node,
}

export default LayoutContainer
