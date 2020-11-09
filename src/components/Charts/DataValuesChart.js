import React from 'react'
import PropTypes from '@dhis2/prop-types'
import parseChartData from './parseChartData.js'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'

const DataValuesChart = ({
    data,
    aggregation,
    category,
    chartType,
    interval,
}) => {
    const parsed = parseChartData({
        aggregation,
        category,
        chartType,
        interval,
        data,
    })
    const { options, data: lineData, title, subtitle } = parsed

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={lineData} options={options} />
        </ChartWrapper>
    )
}

DataValuesChart.propTypes = {
    aggregation: PropTypes.string,
    category: PropTypes.string,
    chartType: PropTypes.string,
    data: PropTypes.array,
    interval: PropTypes.string,
}

export default DataValuesChart
