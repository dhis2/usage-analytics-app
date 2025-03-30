import PropTypes from 'prop-types'
import React from 'react'
import {
    DateRangeField,
    IntervalField,
    AggregationField,
    ChartTypeField,
} from '../FilterFields/index.js'

const FavoriteViewsFilters = ({
    aggregation,
    chartType,
    endDate,
    interval,
    setAggregation,
    setChartType,
    setEndDate,
    setReportInterval,
    setStartDate,
    startDate,
}) => (
    <React.Fragment>
        <DateRangeField
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
        />
        <IntervalField
            interval={interval}
            setReportInterval={setReportInterval}
        />
        <AggregationField
            aggregation={aggregation}
            setAggregation={setAggregation}
        />
        <ChartTypeField chartType={chartType} setChartType={setChartType} />
    </React.Fragment>
)

FavoriteViewsFilters.propTypes = {
    aggregation: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    setAggregation: PropTypes.func.isRequired,
    setChartType: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setReportInterval: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FavoriteViewsFilters
