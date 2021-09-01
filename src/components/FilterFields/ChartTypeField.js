import i18n from '@dhis2/d2-i18n'
import { PropTypes } from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import React from 'react'
import chartTypes from '../../constants/chartTypes.js'
import FieldSpacer from '../FieldSpacer/index.js'

const ChartTypeField = ({ chartType, setChartType }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={chartType}
            onChange={({ selected }) => {
                setChartType(selected)
            }}
            label={i18n.t('Chart Type')}
        >
            {chartTypes.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

ChartTypeField.propTypes = {
    chartType: PropTypes.string.isRequired,
    setChartType: PropTypes.func.isRequired,
}

export default ChartTypeField
