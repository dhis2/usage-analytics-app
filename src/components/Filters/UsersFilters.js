import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { DateRangeField, IntervalField } from '../FilterFields/index.js'

const UsersFilters = ({
    endDate,
    interval,
    setEndDate,
    setInterval,
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
        <IntervalField interval={interval} setInterval={setInterval} />
    </React.Fragment>
)

UsersFilters.propTypes = {
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setInterval: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default UsersFilters
