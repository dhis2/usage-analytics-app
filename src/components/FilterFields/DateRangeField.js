import PropTypes from 'prop-types'
import React, { useState } from 'react'
import EndDateField from './EndDateField.js'
import StartDateField from './StartDateField.js'
import { validateDateRange } from './validators.js'

const DateRangeField = ({ startDate, setStartDate, endDate, setEndDate }) => {
    const [startDateError, setStartDateError] = useState('')
    const [endDateError, setEndDateError] = useState('')
    const [rangeError, setRangeError] = useState('')

    const onRangeChange = (startDate, endDate) => {
        setRangeError(validateDateRange(startDate, endDate))
    }

    const onStartDateChange = (value) => {
        onRangeChange(value, endDate)
        setStartDate(value)
    }

    const onEndDateChange = (value) => {
        onRangeChange(startDate, value)
        setEndDate(value)
    }

    return (
        <div>
            <StartDateField
                startDate={startDate}
                setStartDate={onStartDateChange}
                startDateError={startDateError || rangeError}
                setStartDateError={setStartDateError}
            />
            <EndDateField
                endDate={endDate}
                setEndDate={onEndDateChange}
                endDateError={endDateError || rangeError}
                setEndDateError={setEndDateError}
            />
        </div>
    )
}

DateRangeField.propTypes = {
    endDate: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DateRangeField
