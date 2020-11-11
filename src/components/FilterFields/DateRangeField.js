import React, { useState } from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'
import {
    validateStartDate,
    validateEndDate,
    validateDate,
} from './validators.js'

const DateRangeField = ({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setIsValid,
}) => {
    const [startDateError, setStartDateError] = useState('')
    const [endDateError, setEndDateError] = useState('')

    const onStartDateChange = ({ value }) => {
        // First generic validation, then the field specific validation
        const errorMessage =
            validateDate(value) || validateStartDate(value, endDate)

        if (errorMessage) {
            setStartDateError(errorMessage)
            setIsValid(false)
        } else {
            // Clear the error if it's been resolved
            setStartDateError('')
        }

        // Revalidate the end date
        const endDateErrorMessage =
            validateDate(endDate) || validateEndDate(value, endDate)

        if (!errorMessage && !endDateErrorMessage) {
            // If both fields have become valid update the error and valid states
            setEndDateError('')
            setIsValid(true)
        }

        // Finally, update the state
        setStartDate(value)
    }

    const onEndDateChange = ({ value }) => {
        // First generic validation, then the field specific validation
        const errorMessage =
            validateDate(value) || validateEndDate(startDate, value)

        if (errorMessage) {
            setEndDateError(errorMessage)
            setIsValid(false)
        } else {
            // Clear the error if it's been resolved
            setEndDateError('')
        }

        // Revalidate the start date
        const startDateErrorMessage =
            validateDate(startDate) || validateStartDate(startDate, value)

        if (!errorMessage && !startDateErrorMessage) {
            // If both fields have become valid update the error and valid states
            setStartDateError('')
            setIsValid(true)
        }

        // Finally, update the state
        setEndDate(value)
    }

    return (
        <div>
            <InputField
                label={i18n.t('Start Date')}
                type="date"
                value={startDate}
                error={!!startDateError}
                validationText={startDateError}
                onChange={onStartDateChange}
            />
            <InputField
                label={i18n.t('End Date')}
                type="date"
                value={endDate}
                error={!!endDateError}
                validationText={endDateError}
                onChange={onEndDateChange}
            />
        </div>
    )
}

DateRangeField.propTypes = {
    endDate: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setIsValid: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DateRangeField
