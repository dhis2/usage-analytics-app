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
    isDateValid,
    pageSize,
    setIsIntervalStale,
    sortOrder,
    startDate,
}) => {
    /**
     * Render a loading spinner if the current date range is invalid, to not
     * trigger any invalid fetches
     */
    if (!isDateValid) {
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
    aggregation: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isDateValid: PropTypes.bool.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    pageSize: PropTypes.string.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default Visualization
