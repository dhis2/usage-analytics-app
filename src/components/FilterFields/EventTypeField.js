import i18n from '@dhis2/d2-i18n'
import { PropTypes } from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import React from 'react'
import eventTypes from '../../constants/eventTypes.js'
import FieldSpacer from '../FieldSpacer/index.js'

const EventTypeField = ({ eventType, setEventType }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={eventType}
            onChange={({ selected }) => {
                setEventType(selected)
            }}
            label={i18n.t('Event Type')}
        >
            {eventTypes.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

EventTypeField.propTypes = {
    eventType: PropTypes.string.isRequired,
    setEventType: PropTypes.func.isRequired,
}

export default EventTypeField
