import { PropTypes } from '@dhis2/prop-types'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { FAVORITE_VIEWS } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.js'
import options from './options.js'
import {
    getTitles,
    getLabels,
    getAverageTotalFavoriteViewsDatasets,
} from './selectors.js'

const AverageTotalFavoriteViewsChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(FAVORITE_VIEWS)
    const labels = getLabels(data, interval)
    const datasets = getAverageTotalFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

AverageTotalFavoriteViewsChart.propTypes = {
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
