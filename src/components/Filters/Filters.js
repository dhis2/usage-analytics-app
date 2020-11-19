import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { NoticeBox } from '@dhis2/ui'
import {
    TOP_FAVORITES,
    DATA_VALUES,
    USERS,
    FAVORITES_SAVED,
    FAVORITE_VIEWS,
} from '../../constants/categories.js'
import TopFavoritesFilters from './TopFavoritesFilters.js'
import DataValuesFilters from './DataValuesFilters.js'
import UsersFilters from './UsersFilters.js'
import FavoritesSavedFilters from './FavoritesSavedFilters.js'
import FavoriteViewsFilters from './FavoriteViewsFilters.js'

const Filters = ({
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
    switch (category) {
        case TOP_FAVORITES:
            return (
                <TopFavoritesFilters
                    eventType={eventType}
                    setEventType={setEventType}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
            )
        case FAVORITE_VIEWS:
            return (
                <FavoriteViewsFilters
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    interval={interval}
                    setInterval={setInterval}
                    aggregation={aggregation}
                    setAggregation={setAggregation}
                    chartType={chartType}
                    setChartType={setChartType}
                />
            )
        case DATA_VALUES:
            return (
                <DataValuesFilters
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    interval={interval}
                    setInterval={setInterval}
                />
            )
        case USERS:
            return (
                <UsersFilters
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    interval={interval}
                    setInterval={setInterval}
                />
            )
        case FAVORITES_SAVED:
            return (
                <FavoritesSavedFilters
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    interval={interval}
                    setInterval={setInterval}
                />
            )
        default:
            return (
                <NoticeBox error title={i18n.t('Unrecognized category')}>
                    {i18n.t('The chosen category was not recognized.')}
                </NoticeBox>
            )
    }
}

Filters.propTypes = {
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

export default Filters
