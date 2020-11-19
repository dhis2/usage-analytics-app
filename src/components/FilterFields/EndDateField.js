import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'
import { validateDate } from './validators.js'

const EndDateField = ({
    endDate,
    setEndDate,
    endDateError,
    setEndDateError,
}) => {
    const onChange = ({ value }) => {
        setEndDateError(validateDate(value))
        setEndDate(value)
    }

    return (
        <InputField
            label={i18n.t('End Date')}
            type="date"
            value={endDate}
            error={!!endDateError}
            validationText={endDateError}
            onChange={onChange}
        />
    )
}

EndDateField.propTypes = {
    endDate: PropTypes.string.isRequired,
    endDateError: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setEndDateError: PropTypes.func.isRequired,
}

export default EndDateField
