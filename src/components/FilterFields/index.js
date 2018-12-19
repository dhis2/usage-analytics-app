import React from 'react'
import { connect } from 'react-redux'
import i18n from '@dhis2/d2-i18n'
import SelectField from 'ui/core/SelectField'
import DateField from './DateField'

import CATEGORIES from '../../constants/categories'
import INTERVALS from '../../constants/intervals'
import AGGREGATIONS from '../../constants/aggregations'
import CHART_TYPES from '../../constants/chartTypes'
import EVENT_TYPES from '../../constants/eventTypes'
import PAGE_SIZES from '../../constants/pageSizes'
import SORT_ORDERS from '../../constants/sortOrders'
import {
    updateCategory,
    updateFilterAndGetData,
    updateFilter,
} from '../../actions'

const FIELD_KIND = 'filled'

export const CategoryDropDown = connect(
    state => ({
        value: state.filter.category,
    }),
    { onChange: updateCategory }
)(props => (
    <SelectField
        {...props}
        name="category"
        list={CATEGORIES}
        label={i18n.t('Category')}
        kind={FIELD_KIND}
    />
))

export const StartDateInput = connect(
    state => ({
        initialValue: state.filter.startDate,
        endDate: state.filter.endDate,
    }),
    { onChange: updateFilterAndGetData }
)(props => (
    <DateField {...props} name="startDate" label={i18n.t('Start date')} />
))

export const EndDateInput = connect(
    state => ({
        initialValue: state.filter.endDate,
        startDate: state.filter.startDate,
    }),
    { onChange: updateFilterAndGetData }
)(props => <DateField {...props} name="endDate" label={i18n.t('End date')} />)

export const IntervalDropDown = connect(
    state => ({ value: state.filter.interval }),
    { onChange: updateFilterAndGetData }
)(props => (
    <SelectField
        {...props}
        name="interval"
        list={INTERVALS}
        label={i18n.t('Interval')}
        kind={FIELD_KIND}
    />
))

export const AggregationLevelDropDown = connect(
    state => ({ value: state.filter.aggregationLevel }),
    { onChange: updateFilter }
)(props => (
    <SelectField
        {...props}
        name="aggregationLevel"
        list={AGGREGATIONS}
        label={i18n.t('Aggregation Level')}
        kind={FIELD_KIND}
    />
))

export const ChartTypeDropDown = connect(
    state => ({ value: state.filter.chartType }),
    { onChange: updateFilter }
)(props => (
    <SelectField
        {...props}
        name="chartType"
        list={CHART_TYPES}
        label={i18n.t('Chart Type')}
        kind={FIELD_KIND}
    />
))

export const EventTypeDropDown = connect(
    state => ({ value: state.filter.eventType }),
    { onChange: updateFilterAndGetData }
)(props => (
    <SelectField
        {...props}
        name="eventType"
        list={EVENT_TYPES}
        label={i18n.t('Event Type')}
        kind={FIELD_KIND}
    />
))

export const PageSizeDropDown = connect(
    state => ({ value: state.filter.pageSize }),
    { onChange: updateFilterAndGetData }
)(props => (
    <SelectField
        {...props}
        name="pageSize"
        list={PAGE_SIZES}
        label={i18n.t('Page Size')}
        kind={FIELD_KIND}
    />
))

export const SortOrderDropDown = connect(
    state => ({ value: state.filter.sortOrder }),
    { onChange: updateFilterAndGetData }
)(props => (
    <SelectField
        {...props}
        name="sortOrder"
        list={SORT_ORDERS}
        label={i18n.t('Sort Order')}
        kind={FIELD_KIND}
    />
))
