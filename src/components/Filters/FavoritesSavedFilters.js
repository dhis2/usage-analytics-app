import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { DateRangeField, IntervalField } from '../FilterFields/index.js'

const FavoritesSavedFilters = ({
    endDate,
    interval,
    setEndDate,
    setReportInterval,
    setStartDate,
    startDate,
}) => (
    <React.Fragment>
        <DateRangeField
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
        />
        <IntervalField
            interval={interval}
            setReportInterval={setReportInterval}
        />
    </React.Fragment>
)

FavoritesSavedFilters.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setReportInterval: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FavoritesSavedFilters
