import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { SUM } from '../../constants/aggregations.js'
import { SumFavoriteViewsTable, AverageFavoriteViewsTable } from '../Tables'
import { DataStatisticsQuery } from '../Queries'

const FavoriteViewsVisualization = ({
    aggregation,
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
        {data => (
            <Fragment>
                {aggregation === SUM ? (
                    <SumFavoriteViewsTable data={data} interval={interval} />
                ) : (
                    <AverageFavoriteViewsTable
                        data={data}
                        interval={interval}
                    />
                )}
            </Fragment>
        )}
    </DataStatisticsQuery>
)

FavoriteViewsVisualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    aggregation: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default FavoriteViewsVisualization
