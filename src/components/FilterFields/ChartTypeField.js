import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import FieldSpacer from '../FieldSpacer/index.js'
import chartTypes from '../../constants/chartTypes.js'

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
