import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { FAVORITES_SAVED } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.js'
import options from './options.js'
import { getTitles, getLabels, getFavoritesSavedDatasets } from './selectors.js'

const FavoritesSavedChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(FAVORITES_SAVED)
    const labels = getLabels(data, interval)
    const datasets = getFavoritesSavedDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

FavoritesSavedChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            savedCharts: PropTypes.number.isRequired,
            savedDashboards: PropTypes.number.isRequired,
            savedEventCharts: PropTypes.number.isRequired,
            savedEventReports: PropTypes.number.isRequired,
            savedIndicators: PropTypes.number.isRequired,
            savedMaps: PropTypes.number.isRequired,
            savedPivotTables: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default FavoritesSavedChart
