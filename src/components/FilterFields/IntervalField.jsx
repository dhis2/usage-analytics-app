import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import intervals from '../../constants/intervals.js'
import FieldSpacer from '../FieldSpacer/index.js'

const IntervalField = ({ interval, setReportInterval }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={interval}
            onChange={({ selected }) => {
                setReportInterval(selected)
            }}
            label={i18n.t('Interval')}
        >
            {intervals.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

IntervalField.propTypes = {
    interval: PropTypes.string.isRequired,
    setReportInterval: PropTypes.func.isRequired,
}

export default IntervalField
