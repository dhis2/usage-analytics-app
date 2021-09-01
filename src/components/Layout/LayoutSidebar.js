import { PropTypes } from '@dhis2/prop-types'
import React from 'react'
import styles from './LayoutSidebar.module.css'

const LayoutSidebar = ({ children }) => (
    <aside className={styles.sidebar}>{children}</aside>
)

LayoutSidebar.propTypes = {
    children: PropTypes.node,
}

export default LayoutSidebar
