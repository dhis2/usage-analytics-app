import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import { getTitles, getLabels, getDataValuesDatasets } from './selectors.js'
import options from './options.js'

const DataValuesChart = ({ data, category, interval }) => {
    const { title, subtitle } = getTitles(category)
    const labels = getLabels(data, interval)
    const datasets = getDataValuesDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

DataValuesChart.propTypes = {
    category: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            savedDataValues: PropTypes.number.isRequired,
        })
    ),
}

export default DataValuesChart
