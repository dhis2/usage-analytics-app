import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { SUM } from '../../constants/aggregations.js'
import {
    DATA_VALUES,
    USERS,
    FAVORITES_SAVED,
    FAVORITE_VIEWS,
} from '../../constants/categories.js'
import {
    DataValuesTable,
    UsersTable,
    FavoritesSavedTable,
    SumFavoriteViewsTable,
    AverageFavoriteViewsTable,
} from '../Tables'
import { DataValuesChart, UsersChart, FavoritesSavedChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const DataStatisticsVisualization = ({
    aggregation,
    category,
    endDate,
    interval,
    setIsStale,
    isStale,
    startDate,
}) => (
    <DataStatisticsQuery
        startDate={startDate}
        endDate={endDate}
        interval={interval}
        setIsStale={setIsStale}
        isStale={isStale}
    >
        {data => {
            switch (category) {
                case DATA_VALUES:
                    return (
                        <Fragment>
                            <DataValuesChart
                                data={data}
                                interval={interval}
                                category={category}
                            />
                            <DataValuesTable data={data} interval={interval} />
                        </Fragment>
                    )
                case USERS:
                    return (
                        <Fragment>
                            <UsersChart
                                data={data}
                                interval={interval}
                                category={category}
                            />
                            <UsersTable data={data} interval={interval} />
                        </Fragment>
                    )
                case FAVORITES_SAVED:
                    return (
                        <Fragment>
                            <FavoritesSavedChart
                                data={data}
                                interval={interval}
                                category={category}
                            />
                            <FavoritesSavedTable
                                data={data}
                                interval={interval}
                            />
                        </Fragment>
                    )
                case FAVORITE_VIEWS:
                    return (
                        <Fragment>
                            {aggregation === SUM ? (
                                <SumFavoriteViewsTable
                                    data={data}
                                    interval={interval}
                                />
                            ) : (
                                <AverageFavoriteViewsTable
                                    data={data}
                                    interval={interval}
                                />
                            )}
                        </Fragment>
                    )
                default:
                    return null
            }
        }}
    </DataStatisticsQuery>
)

DataStatisticsVisualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    aggregation: PropTypes.string,
    category: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default DataStatisticsVisualization
