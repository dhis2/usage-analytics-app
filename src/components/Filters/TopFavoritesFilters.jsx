import PropTypes from 'prop-types'
import React from 'react'
import {
    EventTypeField,
    PageSizeField,
    SortOrderField,
} from '../FilterFields/index.js'

const TopFavoritesFilters = ({
    eventType,
    pageSize,
    setEventType,
    setPageSize,
    setSortOrder,
    sortOrder,
}) => (
    <React.Fragment>
        <EventTypeField eventType={eventType} setEventType={setEventType} />
        <PageSizeField pageSize={pageSize} setPageSize={setPageSize} />
        <SortOrderField sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </React.Fragment>
)

TopFavoritesFilters.propTypes = {
    eventType: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    setEventType: PropTypes.func.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setSortOrder: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesFilters
