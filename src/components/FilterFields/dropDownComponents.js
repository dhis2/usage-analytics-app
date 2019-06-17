import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { SelectField } from '@dhis2/ui-core'
import withMargin from './withMargin'

import CATEGORIES from '../../constants/categories'
import INTERVALS from '../../constants/intervals'
import AGGREGATIONS from '../../constants/aggregations'
import CHART_TYPES from '../../constants/chartTypes'
import EVENT_TYPES from '../../constants/eventTypes'
import PAGE_SIZES from '../../constants/pageSizes'
import SORT_ORDERS from '../../constants/sortOrders'

const FIELD_KIND = 'filled'

const withKind = props => ({ ...props, [FIELD_KIND]: true })
const SelectFieldWithMargin = withMargin(SelectField)

export const Category = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="category"
        label={i18n.t('Category')}
    >
        {CATEGORIES.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const Interval = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="interval"
        label={i18n.t('Interval')}
    >
        {INTERVALS.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const AggregationLevel = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="aggregationLevel"
        label={i18n.t('Aggregation Level')}
    >
        {AGGREGATIONS.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const ChartType = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="chartType"
        label={i18n.t('Chart Type')}
    >
        {CHART_TYPES.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const EventType = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="eventType"
        label={i18n.t('Event Type')}
    >
        {EVENT_TYPES.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const PageSize = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="pageSize"
        label={i18n.t('Page Size')}
    >
        {PAGE_SIZES.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)

export const SortOrder = props => (
    <SelectFieldWithMargin
        {...withKind(props)}
        name="sortOrder"
        label={i18n.t('Sort Order')}
    >
        {SORT_ORDERS.map(i => (
            <option value={i.value}>{i.label}</option>
        ))}
    </SelectFieldWithMargin>
)
