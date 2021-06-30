import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import { NoticeBox } from '@dhis2/ui'
import React from 'react'
import {
    TOP_FAVORITES,
    DATA_VALUES,
    USERS,
    FAVORITES_SAVED,
    FAVORITE_VIEWS,
} from '../../constants/categories.js'
import DataValuesFilters from './DataValuesFilters.js'
import FavoritesSavedFilters from './FavoritesSavedFilters.js'
import FavoriteViewsFilters from './FavoriteViewsFilters.js'
import TopFavoritesFilters from './TopFavoritesFilters.js'
import UsersFilters from './UsersFilters.js'

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
    setReportInterval,
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
                    setReportInterval={setReportInterval}
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
                    setReportInterval={setReportInterval}
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
                    setReportInterval={setReportInterval}
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
                    setReportInterval={setReportInterval}
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
    setPageSize: PropTypes.func.isRequired,
    setReportInterval: PropTypes.func.isRequired,
    setSortOrder: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default Filters
