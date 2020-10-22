import React, { useState } from 'react'
import { FAVORITE_VIEWS, TOP_FAVORITES } from '../../constants/categories.js'
import { WEEK } from '../../constants/intervals.js'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import { CHART_VIEW } from '../../constants/eventTypes.js'
import { PS_25 } from '../../constants/pageSizes.js'
import { ASC } from '../../constants/sortOrders.js'
import FilterFields from '../FilterFields'
import { LayoutContainer, LayoutSidebar, LayoutContent } from '../Layout'
import CategoryField from '../CategoryField'
import AppTitle from '../AppTitle'
import { LocaleStore } from '../Locale'
import Visualization from '../Visualization'
import './App.css'
import createDefaultDates from './createDefaultDates.js'

const App = () => {
    const { initialStartDate, initialEndDate } = createDefaultDates()

    // State
    const [category, setCategory] = useState(FAVORITE_VIEWS)
    const [startDate, setStartDate] = useState(initialStartDate)
    const [endDate, setEndDate] = useState(initialEndDate)
    const [interval, setInterval] = useState(WEEK)
    const [aggregation, setAggregation] = useState(SUM)
    const [chartType, setChartType] = useState(ALL)
    const [eventType, setEventType] = useState(CHART_VIEW)
    const [pageSize, setPageSize] = useState(PS_25)
    const [sortOrder, setSortOrder] = useState(ASC)

    /**
     * The rendering of the different intervals in the DataValuesTable
     * depends on the props and the data being in sync. To prevent stale
     * props from being used we're marking the props as stale on changes.
     */
    const [stale, setStale] = useState(false)
    const setStaleAndInterval = interval => {
        setStale(true)
        setInterval(interval)
    }

    const isTopFavorites = category === TOP_FAVORITES

    return (
        <LayoutContainer>
            <LayoutSidebar>
                <AppTitle />
                <CategoryField category={category} setCategory={setCategory} />
                <FilterFields
                    category={category}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    interval={interval}
                    setInterval={setStaleAndInterval}
                    aggregation={aggregation}
                    setAggregation={setAggregation}
                    chartType={chartType}
                    setChartType={setChartType}
                    eventType={eventType}
                    setEventType={setEventType}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
            </LayoutSidebar>
            <LayoutContent>
                <LocaleStore>
                    <Visualization
                        isTopFavorites={isTopFavorites}
                        category={category}
                        eventType={eventType}
                        pageSize={pageSize}
                        sortOrder={sortOrder}
                        startDate={startDate}
                        endDate={endDate}
                        interval={interval}
                        stale={stale}
                        setStale={setStale}
                    />
                </LocaleStore>
            </LayoutContent>
        </LayoutContainer>
    )
}

export default App
