import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import FieldSpacer from '../FieldSpacer/index.js'
import sortOrders from '../../constants/sortOrders.js'

const SortOrderField = ({ sortOrder, setSortOrder }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={sortOrder}
            onChange={({ selected }) => {
                setSortOrder(selected)
            }}
            label={i18n.t('Sort Order')}
        >
            {sortOrders.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

SortOrderField.propTypes = {
    setSortOrder: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default SortOrderField
