import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Card } from '@dhis2/ui'
import ChartHeader from './ChartHeader.js'
import styles from './ChartWrapper.module.css'

/**
 * This wrapper expects a react-chartjs-2 <Line> component as child.
 */

const ChartWrapper = ({ children, title, subtitle }) => (
    <div className={styles.outerContainer}>
        <Card>
            <div className={styles.innerContainer}>
                <ChartHeader title={title} subtitle={subtitle} />
                <div className={styles.chartContainer}>{children}</div>
            </div>
        </Card>
    </div>
)

ChartWrapper.propTypes = {
    children: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
}

export default ChartWrapper
