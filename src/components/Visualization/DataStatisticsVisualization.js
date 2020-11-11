import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { DATA_VALUES, USERS } from '../../constants/categories.js'
import { DataValuesTable, UsersTable } from '../Tables'
import { DataValuesChart, UsersChart } from '../Charts'
import { DataStatisticsQuery } from '../Queries'

const DataStatisticsVisualization = ({
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
                default:
                    return null
            }
        }}
    </DataStatisticsQuery>
)

DataStatisticsVisualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    interval: PropTypes.string,
    startDate: PropTypes.string,
}

export default DataStatisticsVisualization
