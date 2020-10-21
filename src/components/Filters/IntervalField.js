import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import intervals from '../../constants/intervals.js'

const IntervalField = ({ interval, setInterval }) => (
    <SingleSelectField
        selected={interval}
        onChange={({ selected }) => {
            setInterval(selected)
        }}
        label={i18n.t('Interval')}
    >
        {intervals.map(({ label, value }) => (
            <SingleSelectOption label={label} key={value} value={value} />
        ))}
    </SingleSelectField>
)

IntervalField.propTypes = {
    interval: PropTypes.string.isRequired,
    setInterval: PropTypes.func.isRequired,
}

export default IntervalField
