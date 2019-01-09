import React from 'react'
import i18n from '@dhis2/d2-i18n'
import SelectField from '@dhis2/ui/core/SelectField'
import FieldWrap from './FieldWrap'
import DateField from './DateField'

import CATEGORIES from '../../constants/categories'
import INTERVALS from '../../constants/intervals'
import AGGREGATIONS from '../../constants/aggregations'
import CHART_TYPES from '../../constants/chartTypes'
import EVENT_TYPES from '../../constants/eventTypes'
import PAGE_SIZES from '../../constants/pageSizes'
import SORT_ORDERS from '../../constants/sortOrders'

const FIELD_KIND = 'filled'

export const CategoryDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="category"
        list={CATEGORIES}
        label={i18n.t('Category')}
        kind={FIELD_KIND}
    />
)

export const StartDateInput = props => (
    <DateField {...props} name="startDate" label={i18n.t('Start date')} />
)

export const EndDateInput = props => (
    <DateField {...props} name="endDate" label={i18n.t('End date')} />
)

export const IntervalDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="interval"
        list={INTERVALS}
        label={i18n.t('Interval')}
        kind={FIELD_KIND}
    />
)

export const AggregationLevelDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="aggregationLevel"
        list={AGGREGATIONS}
        label={i18n.t('Aggregation Level')}
        kind={FIELD_KIND}
    />
)

export const ChartTypeDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="chartType"
        list={CHART_TYPES}
        label={i18n.t('Chart Type')}
        kind={FIELD_KIND}
    />
)

export const EventTypeDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="eventType"
        list={EVENT_TYPES}
        label={i18n.t('Event Type')}
        kind={FIELD_KIND}
    />
)

export const PageSizeDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="pageSize"
        list={PAGE_SIZES}
        label={i18n.t('Page Size')}
        kind={FIELD_KIND}
    />
)

export const SortOrderDropDown = props => (
    <FieldWrap
        component={SelectField}
        {...props}
        name="sortOrder"
        list={SORT_ORDERS}
        label={i18n.t('Sort Order')}
        kind={FIELD_KIND}
    />
)
