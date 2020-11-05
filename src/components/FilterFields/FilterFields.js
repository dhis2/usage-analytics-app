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
    category,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    interval,
    setInterval,
    aggregation,
    setAggregation,
    chartType,
    setChartType,
    eventType,
    setEventType,
    pageSize,
    setPageSize,
    sortOrder,
    setSortOrder,
}) => {
    // Category checks
    const isTopFavorites = category === TOP_FAVORITES
    const isFavoriteViews = category === FAVORITE_VIEWS

    return (
        <React.Fragment>
            {!isTopFavorites && (
                <React.Fragment>
                    <DateRangeField
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                    <IntervalField
                        interval={interval}
                        setInterval={setInterval}
                    />
                </React.Fragment>
            )}
            {isFavoriteViews && (
                <React.Fragment>
                    <AggregationField
                        aggregation={aggregation}
                        setAggregation={setAggregation}
                    />
                    <ChartTypeField
                        chartType={chartType}
                        setChartType={setChartType}
                    />
                </React.Fragment>
            )}
            {isTopFavorites && (
                <React.Fragment>
                    <EventTypeField
                        eventType={eventType}
                        setEventType={setEventType}
                    />
                    <PageSizeField
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                    />
                    <SortOrderField
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                </React.Fragment>
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
