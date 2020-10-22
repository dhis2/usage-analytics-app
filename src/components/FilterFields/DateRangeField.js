import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'

const DateRangeField = ({ startDate, setStartDate, endDate, setEndDate }) => (
    <div className="uaa-date-range">
        <InputField
            label={i18n.t('Start Date')}
            type="date"
            value={startDate}
            onChange={({ value }) => setStartDate(value)}
        />
        <InputField
            label={i18n.t('End Date')}
            type="date"
            value={endDate}
            onChange={({ value }) => setEndDate(value)}
        />
    </div>
)

DateRangeField.propTypes = {
    endDate: PropTypes.string.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default DateRangeField
