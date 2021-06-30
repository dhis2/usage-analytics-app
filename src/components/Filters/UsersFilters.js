import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { DateRangeField, IntervalField } from '../FilterFields/index.js'

const UsersFilters = ({
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

UsersFilters.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setReportInterval: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default UsersFilters
