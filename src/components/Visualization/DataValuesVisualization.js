import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { DataValuesTable } from '../Tables'
import { DataValuesChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const fields = ['year', 'month', 'week', 'day', 'savedDataValues']

const DataValuesVisualization = ({
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
        fields={fields}
    >
        {data => (
            <Fragment>
                <DataValuesChart
                    data={data}
                    interval={interval}
                    category={category}
                />
                <DataValuesTable data={data} interval={interval} />
            </Fragment>
        )}
    </DataStatisticsQuery>
)

DataValuesVisualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default DataValuesVisualization
