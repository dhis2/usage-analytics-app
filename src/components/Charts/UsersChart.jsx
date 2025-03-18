import PropTypes from 'prop-types'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { USERS } from '../../constants/categories.js'
import ChartWrapper from './ChartWrapper.jsx'
import options from './options.js'
import { getTitles, getLabels, getUsersDatasets } from './selectors.js'

const UsersChart = ({ data, interval }) => {
    const { title, subtitle } = getTitles(USERS)
    const labels = getLabels(data, interval)
    const datasets = getUsersDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

UsersChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            activeUsers: PropTypes.number.isRequired,
            users: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default UsersChart
