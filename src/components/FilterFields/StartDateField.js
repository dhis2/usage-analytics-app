import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'
import { validateDate } from './validators.js'

const StartDateField = ({
    startDate,
    setStartDate,
    startDateError,
    setStartDateError,
}) => {
    const onChange = ({ value }) => {
        setStartDateError(validateDate(value))
        setStartDate(value)
    }

    return (
        <InputField
            label={i18n.t('Start Date')}
            type="date"
            value={startDate}
            error={!!startDateError}
            validationText={startDateError}
            onChange={onChange}
        />
    )
}

StartDateField.propTypes = {
    setStartDate: PropTypes.func.isRequired,
    setStartDateError: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
    startDateError: PropTypes.string.isRequired,
}

export default StartDateField
