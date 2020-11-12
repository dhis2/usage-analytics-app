import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import eventTypes from '../../constants/eventTypes.js'

const EventTypeField = ({ eventType, setEventType }) => (
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
)

EventTypeField.propTypes = {
    eventType: PropTypes.string.isRequired,
    setEventType: PropTypes.func.isRequired,
}

export default EventTypeField
