import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import { DATA_VALUES } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.js'
import { getTitles, getLabels, getDataValuesDatasets } from './selectors.js'
import options from './options.js'

const DataValuesChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(DATA_VALUES)
    const labels = getLabels(data, interval)
    const datasets = getDataValuesDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

DataValuesChart.propTypes = {
    interval: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            savedDataValues: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ),
}

export default DataValuesChart
