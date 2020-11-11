import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { CircularLoader, ComponentCover, CenteredContent } from '@dhis2/ui'
import TopFavoritesVisualization from './TopFavoritesVisualization.js'
import DataStatisticsVisualization from './DataStatisticsVisualization.js'

const Visualization = ({
    aggregation,
    category,
    endDate,
    eventType,
    interval,
    isTopFavorites,
    pageSize,
    setIsStale,
    sortOrder,
    isStale,
    startDate,
    isValid,
}) => {
    if (!isValid) {
        return (
            <ComponentCover>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </ComponentCover>
        )
    }

    if (isTopFavorites) {
        return (
            <TopFavoritesVisualization
                eventType={eventType}
                pageSize={pageSize}
                sortOrder={sortOrder}
            />
        )
    }

    return (
        <DataStatisticsVisualization
            aggregation={aggregation}
            category={category}
            startDate={startDate}
            endDate={endDate}
            interval={interval}
            setIsStale={setIsStale}
            isStale={isStale}
        />
    )
}

Visualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    isTopFavorites: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    aggregation: PropTypes.string,
    category: PropTypes.string,
    endDate: PropTypes.string,
    eventType: PropTypes.string,
    interval: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
    startDate: PropTypes.string,
}

export default Visualization
