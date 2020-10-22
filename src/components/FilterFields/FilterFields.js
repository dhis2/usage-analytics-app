import React from 'react'
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

export default FilterFields
