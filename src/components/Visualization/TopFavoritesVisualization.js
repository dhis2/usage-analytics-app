import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { TopFavoritesTable } from '../Tables/index.js'
import { TopDashboardsQuery, TopFavoritesQuery } from '../Queries/index.js'
import { DASHBOARD_VIEW } from '../../constants/eventTypes'

const fields = ['position', 'name', 'views', 'id', 'created']

const TopFavoritesVisualization = ({
    countPassiveViews,
    eventType,
    pageSize,
    sortOrder,
}) =>
    countPassiveViews && eventType === DASHBOARD_VIEW ? (
        <TopDashboardsQuery
            countPassiveViews={countPassiveViews}
            eventType={eventType}
            fields={fields}
            pageSize={pageSize}
            sortOrder={sortOrder}
        >
            {data => <TopFavoritesTable data={data} />}
        </TopDashboardsQuery>
    ) : (
        <TopFavoritesQuery
            eventType={eventType}
            fields={fields}
            pageSize={pageSize}
            sortOrder={sortOrder}
        >
            {data => <TopFavoritesTable data={data} />}
        </TopFavoritesQuery>
    )

TopFavoritesVisualization.propTypes = {
    countPassiveViews: PropTypes.bool.isRequired,
    eventType: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesVisualization
