import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import FieldSpacer from '../FieldSpacer/index.js'
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
        <FieldSpacer>
            <InputField
                label={i18n.t('Start Date')}
                type="date"
                value={startDate}
                error={!!startDateError}
                validationText={startDateError}
                onChange={onChange}
            />
        </FieldSpacer>
    )
}

StartDateField.propTypes = {
    setStartDate: PropTypes.func.isRequired,
    setStartDateError: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
    startDateError: PropTypes.string.isRequired,
}

export default StartDateField
