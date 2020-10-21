import React, { useState } from 'react'
import {
    CategoryField,
    DateRangeField,
    IntervalField,
    AggregationField,
    ChartTypeField,
    EventTypeField,
    PageSizeField,
    SortOrderField,
} from '../Filters'
// import Chart from '../Chart'
// import Table from '../Table'
import { FAVORITE_VIEWS, TOP_FAVORITES } from '../../constants/categories.js'
import { WEEK } from '../../constants/intervals.js'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import { CHART_VIEW } from '../../constants/eventTypes.js'
import { PS_25 } from '../../constants/pageSizes.js'
import { ASC } from '../../constants/sortOrders.js'
import { LayoutContainer, LayoutSidebar, LayoutContent } from '../Layout'
import AppTitle from '../AppTitle'
import './App.css'

const App = () => {
    const [category, setCategory] = useState(FAVORITE_VIEWS)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [interval, setInterval] = useState(WEEK)
    const [aggregation, setAggregation] = useState(SUM)
    const [chartType, setChartType] = useState(ALL)
    const [eventType, setEventType] = useState(CHART_VIEW)
    const [pageSize, setPageSize] = useState(PS_25)
    const [sortOrder, setSortOrder] = useState(ASC)

    const showDateFields = category !== TOP_FAVORITES
    const showFavoriteViewsFields = category === FAVORITE_VIEWS
    const showTopFavoritesFields = category === TOP_FAVORITES

    return (
        <LayoutContainer>
            <LayoutSidebar>
                <AppTitle />
                <CategoryField category={category} setCategory={setCategory} />
                {showDateFields && (
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
                {showFavoriteViewsFields && (
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
                {showTopFavoritesFields && (
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
                {/* <section className={styles.child}> */}
                {/*     <Chart /> */}
                {/*     <Table /> */}
                {/* </section> */}
            </LayoutContent>
        </LayoutContainer>
    )
}

export default App
