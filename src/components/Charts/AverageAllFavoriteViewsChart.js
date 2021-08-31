import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { FAVORITE_VIEWS } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.js'
import options from './options.js'
import {
    getTitles,
    getLabels,
    getAverageAllFavoriteViewsDatasets,
} from './selectors.js'

const AverageAllFavoriteViewsChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(FAVORITE_VIEWS)
    const labels = getLabels(data, interval)
    const datasets = getAverageAllFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

AverageAllFavoriteViewsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            averageDashboardViews: PropTypes.number.isRequired,
            averageEventChartViews: PropTypes.number.isRequired,
            averageEventReportViews: PropTypes.number.isRequired,
            averageMapViews: PropTypes.number.isRequired,
            averageVisualizationViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default AverageAllFavoriteViewsChart
