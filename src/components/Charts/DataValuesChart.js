import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import parseChartData from './parseChartData.js'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import { getTitles } from './selectors.js'

/**
 * For documentation on the options see:
 * https://github.com/reactchartjs/react-chartjs-2
 * https://www.chartjs.org/docs/latest/
 */

const options = {
    animation: {
        duration: 180,
    },
    legend: {
        position: 'bottom',
    },
    maintainAspectRatio: false,
    elements: {
        line: {
            tension: 0,
            fill: false,
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    },
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: i18n.t('Values'),
                },
            },
        ],
    },
}

const DataValuesChart = ({
    data,
    aggregation,
    category,
    chartType,
    interval,
}) => {
    const { title, subtitle } = getTitles(category)
    const parsed = parseChartData({
        aggregation,
        category,
        chartType,
        interval,
        data,
    })
    const lineData = parsed

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
