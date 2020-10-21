import React from 'react'
import PropTypes from '@dhis2/prop-types'
import styles from './LayoutContent.module.css'

const LayoutContent = ({ children }) => (
    <section className={styles.content}>{children}</section>
)

LayoutContent.propTypes = {
    children: PropTypes.node,
}

export default LayoutContent
