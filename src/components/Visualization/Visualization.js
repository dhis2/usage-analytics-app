import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { DATA_VALUES } from '../../constants/categories.js'
import { DataValuesTable } from '../Tables'
import { DataValuesChart } from '../Charts'
import { TopFavoritesQuery, DataStatisticsQuery } from '../Queries'

const Visualization = ({
    aggregation,
    category,
    chartType,
    endDate,
    eventType,
    interval,
    isTopFavorites,
    pageSize,
    setStale,
    sortOrder,
    stale,
    startDate,
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
                    return (
                        <Fragment>
                            <DataValuesChart
                                data={data}
                                interval={interval}
                                aggregation={aggregation}
                                category={category}
                                chartType={chartType}
                            />
                            <DataValuesTable data={data} interval={interval} />
                        </Fragment>
                    )
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
