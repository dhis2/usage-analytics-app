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
import TopFavoritesVisualization from './TopFavoritesVisualization.js'
import DataValuesVisualization from './DataValuesVisualization.js'
import UsersVisualization from './UsersVisualization.js'
import FavoritesSavedVisualization from './FavoritesSavedVisualization.js'
import FavoriteViewsVisualization from './FavoriteViewsVisualization.js'

const Visualization = ({
    aggregation,
    category,
    chartType,
    endDate,
    eventType,
    interval,
    isIntervalStale,
    pageSize,
    setIsIntervalStale,
    sortOrder,
    startDate,
}) => {
    switch (category) {
        case TOP_FAVORITES:
            return (
                <TopFavoritesVisualization
                    eventType={eventType}
                    pageSize={pageSize}
                    sortOrder={sortOrder}
                />
            )
        case DATA_VALUES:
            return (
                <DataValuesVisualization
                    category={category}
                    endDate={endDate}
                    interval={interval}
                    isIntervalStale={isIntervalStale}
                    setIsIntervalStale={setIsIntervalStale}
                    startDate={startDate}
                />
            )
        case USERS:
            return (
                <UsersVisualization
                    category={category}
                    endDate={endDate}
                    interval={interval}
                    isIntervalStale={isIntervalStale}
                    setIsIntervalStale={setIsIntervalStale}
                    startDate={startDate}
                />
            )
        case FAVORITES_SAVED:
            return (
                <FavoritesSavedVisualization
                    category={category}
                    endDate={endDate}
                    interval={interval}
                    isIntervalStale={isIntervalStale}
                    setIsIntervalStale={setIsIntervalStale}
                    startDate={startDate}
                />
            )
        case FAVORITE_VIEWS:
            return (
                <FavoriteViewsVisualization
                    aggregation={aggregation}
                    category={category}
                    chartType={chartType}
                    endDate={endDate}
                    interval={interval}
                    isIntervalStale={isIntervalStale}
                    setIsIntervalStale={setIsIntervalStale}
                    startDate={startDate}
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

Visualization.propTypes = {
    aggregation: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    pageSize: PropTypes.string.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default Visualization
