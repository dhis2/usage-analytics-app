import React, { useState } from 'react'
import moment from 'moment'
import {
    CategoryField,
    DateRangeField,
    IntervalField,
    AggregationField,
    ChartTypeField,
    EventTypeField,
    PageSizeField,
    SortOrderField,
} from '../Filter'
import { FAVORITE_VIEWS, TOP_FAVORITES } from '../../constants/categories.js'
import { WEEK } from '../../constants/intervals.js'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import { CHART_VIEW } from '../../constants/eventTypes.js'
import { PS_25 } from '../../constants/pageSizes.js'
import { ASC } from '../../constants/sortOrders.js'
import { LayoutContainer, LayoutSidebar, LayoutContent } from '../Layout'
import Chart from '../Chart'
import Table from '../Table'
import AppTitle from '../AppTitle'
import { TopFavoritesQuery, DataStatisticsQuery } from '../Query'
import './App.css'

const App = () => {
    // Create initial start and end dates
    const format = 'YYYY-MM-DD'
    const initialStartDate = moment()
        .subtract(4, 'months')
        .format(format)
    const initialEndDate = moment().format(format)

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

    // Category checks
    const isTopFavorites = category === TOP_FAVORITES
    const isFavoriteViews = category === FAVORITE_VIEWS

    return (
        <LayoutContainer>
            <LayoutSidebar>
                <AppTitle />
                <CategoryField category={category} setCategory={setCategory} />
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
            </LayoutSidebar>
            <LayoutContent>
                {isTopFavorites ? (
                    <TopFavoritesQuery
                        eventType={eventType}
                        pageSize={pageSize}
                        sortOrder={sortOrder}
                    >
                        {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
                    </TopFavoritesQuery>
                ) : (
                    <DataStatisticsQuery
                        startDate={startDate}
                        endDate={endDate}
                        interval={interval}
                    >
                        {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
                    </DataStatisticsQuery>
                )}
                <Chart />
                <Table />
            </LayoutContent>
        </LayoutContainer>
    )
}

export default App
