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
    endDate,
    eventType,
    interval,
    pageSize,
    setIsStale,
    sortOrder,
    isStale,
    startDate,
    isValid,
    chartType,
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
                    startDate={startDate}
                    endDate={endDate}
                    interval={interval}
                    setIsStale={setIsStale}
                    isStale={isStale}
                    category={category}
                />
            )
        case USERS:
            return (
                <UsersVisualization
                    startDate={startDate}
                    endDate={endDate}
                    interval={interval}
                    setIsStale={setIsStale}
                    isStale={isStale}
                    category={category}
                />
            )
        case FAVORITES_SAVED:
            return (
                <FavoritesSavedVisualization
                    startDate={startDate}
                    endDate={endDate}
                    interval={interval}
                    setIsStale={setIsStale}
                    isStale={isStale}
                    category={category}
                />
            )
        case FAVORITE_VIEWS:
            return (
                <FavoriteViewsVisualization
                    aggregation={aggregation}
                    endDate={endDate}
                    interval={interval}
                    isStale={isStale}
                    setIsStale={setIsStale}
                    startDate={startDate}
                    chartType={chartType}
                    category={category}
                />
            )
        default:
            throw new Error('Unrecognized category')
    }
}

Visualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
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
