import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import FieldSpacer from '../FieldSpacer/index.js'
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
        <FieldSpacer>
            <InputField
                label={i18n.t('End Date')}
                type="date"
                value={endDate}
                error={!!endDateError}
                validationText={endDateError}
                onChange={onChange}
            />
        </FieldSpacer>
    )
}

EndDateField.propTypes = {
    endDate: PropTypes.string.isRequired,
    endDateError: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setEndDateError: PropTypes.func.isRequired,
}

export default EndDateField
