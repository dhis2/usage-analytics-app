import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import parseChartData from './parseChartData.js'
import { Line } from 'react-chartjs-2'
import './Chart.css'

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
    const content = (
        <Fragment>
            <h4 className="uaa-chart-title">{title}</h4>
            <h6 className="uaa-chart-subtitle">{subtitle}</h6>
            {/*
                    chart.js canvas needs a dedicated wrapper to have a responsive size
                    https://www.chartjs.org/docs/latest/general/responsive.html#important-note
                */}
            <div className="uaa-chart-wrap">
                <Line data={lineData} options={options} />
            </div>
        </Fragment>
    )
    const className = 'uua-data-container uua-chart-container'

    return <div className={className}>{content}</div>
}

DataValuesChart.propTypes = {
    aggregation: PropTypes.string,
    category: PropTypes.string,
    chartType: PropTypes.string,
    data: PropTypes.array,
    interval: PropTypes.string,
}

export default DataValuesChart
