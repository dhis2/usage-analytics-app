import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import aggregations from '../../constants/aggregations.js'

const AggregationField = ({ aggregation, setAggregation }) => (
    <SingleSelectField
        selected={aggregation}
        onChange={({ selected }) => {
            setAggregation(selected)
        }}
        label={i18n.t('Aggregation level')}
    >
        {aggregations.map(({ label, value }) => (
            <SingleSelectOption label={label} key={value} value={value} />
        ))}
    </SingleSelectField>
)

AggregationField.propTypes = {
    aggregation: PropTypes.string.isRequired,
    setAggregation: PropTypes.func.isRequired,
}

export default AggregationField
