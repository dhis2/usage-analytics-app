import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CircularProgress } from 'ui/core/CircularProgress'
import { Line } from 'react-chartjs-2'
import parseChartData from './parseChartData'
import { LOADING, ERROR } from '../../constants/statuses'
import { TOP_FAVORITES } from '../../constants/categories'
import './Chart.css'

const baseClassName = 'uua-data-container uua-chart-container'
const loadingClassName = ' uua-data-container--loading'

function Chart({ shouldHide, loading, chartConfig }) {
    let content

    if (shouldHide) {
        return null
    } else if (loading) {
        content = <CircularProgress overlay />
    } else {
        const { options, data, title, subtitle } = chartConfig
        content = (
            <Fragment>
                <h4 className="uaa-chart-title">{title}</h4>
                <h6 className="uaa-chart-subtitle">{subtitle}</h6>
                <Line data={data} options={options} />
            </Fragment>
        )
    }

    const className = loading ? baseClassName + loadingClassName : baseClassName

    return <div className={className}>{content}</div>
}

Chart.propTypes = {
    chartConfig: PropTypes.object,
    shouldHide: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
}

// The Chart is not displayed for category TOP_FAVORITES, but it should also
// be hidden when usageData === ERROR, because one Error message is enough,
// and this Error will be displayed in the Table component
function mapStateToProps({ usageData, filter }) {
    const shouldHide = filter.category === TOP_FAVORITES || usageData === ERROR
    const loading = usageData === LOADING
    return {
        shouldHide,
        loading,
        chartConfig:
            shouldHide || loading ? null : parseChartData(filter, usageData),
    }
}

export default connect(mapStateToProps)(Chart)
