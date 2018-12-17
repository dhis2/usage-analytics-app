import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import './DateField.css'

// Very basic date input. If browser doesn't support input type date,
// it will use the pattern validation to display an error
function DateField({ label, value, onChange }) {
    return (
        <div className="uaa-date-field">
            <label>{label}</label>
            <input
                type="date"
                value={value}
                onChange={onChange}
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />
            <span className="uaa-date-input-error">
                {i18n.t('Please use the format yyyy-mm-dd')}
            </span>
        </div>
    )
}

DateField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default DateField
