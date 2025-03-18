import PropTypes from 'prop-types'
import React from 'react'
import styles from './LayoutContent.module.css'

const LayoutContent = ({ children }) => (
    <section className={styles.content}>{children}</section>
)

LayoutContent.propTypes = {
    children: PropTypes.node,
}

export default LayoutContent
