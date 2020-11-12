import React from 'react'
import PropTypes from '@dhis2/prop-types'
import styles from './ChartHeader.module.css'

const ChartHeader = ({ title, subtitle }) => (
    <header>
        <h4 className={styles.title}>{title}</h4>
        <h6 className={styles.subtitle}>{subtitle}</h6>
    </header>
)

ChartHeader.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ChartHeader
