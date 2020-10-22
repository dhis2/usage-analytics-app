import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { DATA_VALUES } from '../../constants/categories.js'
import { DataValuesTable } from '../Tables'
import { TopFavoritesQuery, DataStatisticsQuery } from '../Queries'

const Visualization = ({
    isTopFavorites,
    category,
    eventType,
    pageSize,
    sortOrder,
    startDate,
    endDate,
    interval,
    stale,
    setStale,
}) => {
    if (isTopFavorites) {
        return (
            <TopFavoritesQuery
                eventType={eventType}
                pageSize={pageSize}
                sortOrder={sortOrder}
            >
                {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
            </TopFavoritesQuery>
        )
    }

    return (
        <DataStatisticsQuery
            startDate={startDate}
            endDate={endDate}
            interval={interval}
            setStale={setStale}
            stale={stale}
        >
            {data => {
                if (category === DATA_VALUES) {
                    return <DataValuesTable data={data} interval={interval} />
                }

                return null
            }}
        </DataStatisticsQuery>
    )
}

Visualization.propTypes = {
    isTopFavorites: PropTypes.bool.isRequired,
    setStale: PropTypes.func.isRequired,
    stale: PropTypes.bool.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    eventType: PropTypes.string,
    interval: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
    startDate: PropTypes.string,
}

export default Visualization
