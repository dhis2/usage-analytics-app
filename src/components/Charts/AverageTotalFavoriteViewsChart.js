import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import {
    getTitles,
    getLabels,
    getAverageTotalFavoriteViewsDatasets,
} from './selectors.js'
import options from './options.js'

const AverageTotalFavoriteViewsChart = ({ data, category, interval }) => {
    const { title, subtitle } = getTitles(category)
    const labels = getLabels(data, interval)
    const datasets = getAverageTotalFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

AverageTotalFavoriteViewsChart.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            averageViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default AverageTotalFavoriteViewsChart
