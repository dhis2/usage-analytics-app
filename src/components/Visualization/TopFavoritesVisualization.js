import { PropTypes } from '@dhis2/prop-types'
import React from 'react'
import { TopFavoritesQuery } from '../Queries/index.js'
import { TopFavoritesTable } from '../Tables/index.js'

const fields = ['position', 'name', 'views', 'id', 'created']

const TopFavoritesVisualization = ({ eventType, pageSize, sortOrder }) => (
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
    eventType: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesVisualization
