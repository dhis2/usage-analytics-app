import i18n from '@dhis2/d2-i18n'
import { PropTypes } from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import React from 'react'
import aggregations from '../../constants/aggregations.js'
import FieldSpacer from '../FieldSpacer/index.js'

const AggregationField = ({ aggregation, setAggregation }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={aggregation}
            onChange={({ selected }) => {
                setAggregation(selected)
            }}
            label={i18n.t('Aggregation Level')}
        >
            {aggregations.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

AggregationField.propTypes = {
    aggregation: PropTypes.string.isRequired,
    setAggregation: PropTypes.func.isRequired,
}

export default AggregationField
