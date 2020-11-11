import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { TopFavoritesQuery } from '../Queries'

const TopFavoritesVisualization = ({ eventType, pageSize, sortOrder }) => (
    <TopFavoritesQuery
        eventType={eventType}
        pageSize={pageSize}
        sortOrder={sortOrder}
    >
        {() => null}
    </TopFavoritesQuery>
)

TopFavoritesVisualization.propTypes = {
    eventType: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
}

export default TopFavoritesVisualization
