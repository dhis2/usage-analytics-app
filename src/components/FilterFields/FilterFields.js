import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { FAVORITE_VIEWS, TOP_FAVORITES } from '../../constants/categories.js'
import DateRangeField from './DateRangeField.js'
import IntervalField from './IntervalField.js'
import AggregationField from './AggregationField.js'
import ChartTypeField from './ChartTypeField.js'
import EventTypeField from './EventTypeField.js'
import PageSizeField from './PageSizeField.js'
import SortOrderField from './SortOrderField.js'

const FilterFields = ({
    aggregation,
    category,
    chartType,
    endDate,
    eventType,
    interval,
    pageSize,
    setAggregation,
    setChartType,
    setEndDate,
    setEventType,
    setInterval,
    setPageSize,
    setSortOrder,
    setStartDate,
    sortOrder,
    startDate,
}) => {
    // Category checks
    const isTopFavorites = category === TOP_FAVORITES
    const isFavoriteViews = category === FAVORITE_VIEWS

    // Checks determining whether fields should be shown or not
    const showDateRange = !isTopFavorites
    const showInterval = !isTopFavorites
    const showAggregation = isFavoriteViews
    const showChartType = isFavoriteViews
    const showEventType = isTopFavorites
    const showPageSize = isTopFavorites
    const showSortOrder = isTopFavorites

    return (
        <React.Fragment>
            {showDateRange && (
                <DateRangeField
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
            )}
            {showInterval && (
                <IntervalField interval={interval} setInterval={setInterval} />
            )}
            {showAggregation && (
                <AggregationField
                    aggregation={aggregation}
                    setAggregation={setAggregation}
                />
            )}
            {showChartType && (
                <ChartTypeField
                    chartType={chartType}
                    setChartType={setChartType}
                />
            )}
            {showEventType && (
                <EventTypeField
                    eventType={eventType}
                    setEventType={setEventType}
                />
            )}
            {showPageSize && (
                <PageSizeField pageSize={pageSize} setPageSize={setPageSize} />
            )}
            {showSortOrder && (
                <SortOrderField
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
            )}
        </React.Fragment>
    )
}

FilterFields.propTypes = {
    aggregation: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    setAggregation: PropTypes.func.isRequired,
    setChartType: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setEventType: PropTypes.func.isRequired,
    setInterval: PropTypes.func.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setSortOrder: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FilterFields
