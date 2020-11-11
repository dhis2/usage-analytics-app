import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { CircularLoader, ComponentCover, CenteredContent } from '@dhis2/ui'
import { DATA_VALUES } from '../../constants/categories.js'
import { DataValuesTable } from '../Tables'
import { DataValuesChart } from '../Charts'
import { TopFavoritesQuery, DataStatisticsQuery } from '../Queries'

const Visualization = ({
    category,
    endDate,
    eventType,
    interval,
    isTopFavorites,
    pageSize,
    setIsStale,
    sortOrder,
    isStale,
    startDate,
    isValid,
}) => {
    if (!isValid) {
        return (
            <ComponentCover>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </ComponentCover>
        )
    }

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
            setIsStale={setIsStale}
            isStale={isStale}
        >
            {data => {
                if (category === DATA_VALUES) {
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
                }

                return null
            }}
        </DataStatisticsQuery>
    )
}

Visualization.propTypes = {
    isStale: PropTypes.bool.isRequired,
    isTopFavorites: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setIsStale: PropTypes.func.isRequired,
    category: PropTypes.string,
    endDate: PropTypes.string,
    eventType: PropTypes.string,
    interval: PropTypes.string,
    pageSize: PropTypes.string,
    sortOrder: PropTypes.string,
    startDate: PropTypes.string,
}

export default Visualization
