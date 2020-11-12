import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { CircularLoader, ComponentCover, CenteredContent } from '@dhis2/ui'
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
    isValid,
    pageSize,
    setIsIntervalStale,
    sortOrder,
    startDate,
}) => {
    // Render a loading spinner if invalid, to not trigger any invalid fetches
    if (!isValid) {
        return (
            <ComponentCover>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </ComponentCover>
        )
    }

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
            throw new Error('Unrecognized category')
    }
}

Visualization.propTypes = {
    isIntervalStale: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    aggregation: PropTypes.string,
    category: PropTypes.string,
    chartType: PropTypes.string,
    endDate: PropTypes.string,
    eventType: PropTypes.string,
    interval: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
    startDate: PropTypes.string,
}

export default Visualization
