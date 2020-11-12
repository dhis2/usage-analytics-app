import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { TopFavoritesTable } from '../Tables'
import { TopFavoritesQuery } from '../Queries'

const fields = ['position', 'name', 'views', 'id', 'created']

const TopFavoritesVisualization = ({ eventType, pageSize, sortOrder }) => (
    <TopFavoritesQuery
        eventType={eventType}
        pageSize={pageSize}
        sortOrder={sortOrder}
        fields={fields}
    >
        {data => <TopFavoritesTable data={data} />}
    </TopFavoritesQuery>
)

TopFavoritesVisualization.propTypes = {
    eventType: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
}

export default TopFavoritesVisualization
