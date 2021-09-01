import { PropTypes } from '@dhis2/prop-types'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { FAVORITE_VIEWS } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.js'
import options from './options.js'
import {
    getTitles,
    getLabels,
    getSumAllFavoriteViewsDatasets,
} from './selectors.js'

const SumAllFavoriteViewsChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(FAVORITE_VIEWS)
    const labels = getLabels(data, interval)
    const datasets = getSumAllFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

SumAllFavoriteViewsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dashboardViews: PropTypes.number.isRequired,
            dataSetReportViews: PropTypes.number.isRequired,
            eventChartViews: PropTypes.number.isRequired,
            eventReportViews: PropTypes.number.isRequired,
            mapViews: PropTypes.number.isRequired,
            visualizationViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default SumAllFavoriteViewsChart
