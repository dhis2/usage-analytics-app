import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import {
    SumAllFavoriteViewsChart,
    SumTotalFavoriteViewsChart,
    AverageAllFavoriteViewsChart,
    AverageTotalFavoriteViewsChart,
} from '../Charts'
import { SumFavoriteViewsTable, AverageFavoriteViewsTable } from '../Tables'
import { DataStatisticsQuery } from '../Queries'

const fields = ['year', 'month', 'week', 'day']

const sumFields = [
    ...fields,
    'mapViews',
    'chartViews',
    'pivotTableViews',
    'eventReportViews',
    'eventChartViews',
    'dashboardViews',
    'dataSetReportViews',
    'totalViews',
]

const averageFields = [
    ...fields,
    'averageMapViews',
    'averageChartViews',
    'averagePivotTableViews',
    'averageEventReportViews',
    'averageEventChartViews',
    'averageDashboardViews',
    'averageViews',
]

const FavoriteViewsVisualization = ({
    aggregation,
    category,
    chartType,
    endDate,
    interval,
    isIntervalStale,
    setIsIntervalStale,
    startDate,
}) => {
    const isSum = aggregation === SUM
    const isAll = chartType === ALL

    if (isSum) {
        return (
            <DataStatisticsQuery
                endDate={endDate}
                fields={sumFields}
                interval={interval}
                isIntervalStale={isIntervalStale}
                setIsIntervalStale={setIsIntervalStale}
                startDate={startDate}
            >
                {data => (
                    <Fragment>
                        {isAll ? (
                            <SumAllFavoriteViewsChart
                                data={data}
                                category={category}
                                interval={interval}
                            />
                        ) : (
                            <SumTotalFavoriteViewsChart
                                data={data}
                                category={category}
                                interval={interval}
                            />
                        )}
                        <SumFavoriteViewsTable
                            data={data}
                            interval={interval}
                        />
                    </Fragment>
                )}
            </DataStatisticsQuery>
        )
    }

    return (
        <DataStatisticsQuery
            endDate={endDate}
            fields={averageFields}
            interval={interval}
            isIntervalStale={isIntervalStale}
            setIsIntervalStale={setIsIntervalStale}
            startDate={startDate}
        >
            {data => (
                <Fragment>
                    {isAll ? (
                        <AverageAllFavoriteViewsChart
                            data={data}
                            category={category}
                            interval={interval}
                        />
                    ) : (
                        <AverageTotalFavoriteViewsChart
                            data={data}
                            category={category}
                            interval={interval}
                        />
                    )}
                    <AverageFavoriteViewsTable
                        data={data}
                        interval={interval}
                    />
                </Fragment>
            )}
        </DataStatisticsQuery>
    )
}

FavoriteViewsVisualization.propTypes = {
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    aggregation: PropTypes.string,
    category: PropTypes.string,
    chartType: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default FavoriteViewsVisualization
