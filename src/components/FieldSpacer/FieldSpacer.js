import PropTypes from '@dhis2/prop-types'
import React from 'react'
import styles from './FieldSpacer.module.css'

const FieldSpacer = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

FieldSpacer.propTypes = {
    children: PropTypes.node,
}

export default FieldSpacer
