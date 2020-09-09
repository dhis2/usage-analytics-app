import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'

import CATEGORIES from '../../constants/categories'
import INTERVALS from '../../constants/intervals'
import AGGREGATIONS from '../../constants/aggregations'
import CHART_TYPES from '../../constants/chartTypes'
import EVENT_TYPES from '../../constants/eventTypes'
import PAGE_SIZES from '../../constants/pageSizes'
import SORT_ORDERS from '../../constants/sortOrders'

export const DropDown = ({ options, value, ...rest }) => (
    <SingleSelectField {...rest} selected={value}>
        {options.map(({ label, value }) => (
            <SingleSelectOption label={label} key={value} value={value} />
        ))}
    </SingleSelectField>
)

DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
}

export const Category = props => (
    <DropDown {...props} label={i18n.t('Category')} options={CATEGORIES} />
)

export const Interval = props => (
    <DropDown {...props} label={i18n.t('Interval')} options={INTERVALS} />
)

export const AggregationLevel = props => (
    <DropDown
        {...props}
        label={i18n.t('Aggregation Level')}
        options={AGGREGATIONS}
    />
)

export const ChartType = props => (
    <DropDown {...props} label={i18n.t('Chart Type')} options={CHART_TYPES} />
)

export const EventType = props => (
    <DropDown {...props} label={i18n.t('Event Type')} options={EVENT_TYPES} />
)

export const PageSize = props => (
    <DropDown {...props} label={i18n.t('Page Size')} options={PAGE_SIZES} />
)

export const SortOrder = props => (
    <DropDown {...props} label={i18n.t('Sort Order')} options={SORT_ORDERS} />
)
