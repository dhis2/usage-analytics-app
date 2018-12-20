import { connect } from 'react-redux'
import * as components from './filterComponents'
import {
    updateCategory,
    updateFilterAndGetData,
    updateFilter,
} from '../../actions'

export const CategoryDropDown = connect(
    state => ({
        value: state.filter.category,
    }),
    { onChange: updateCategory }
)(components.CategoryDropDown)

export const StartDateInput = connect(
    state => ({
        initialValue: state.filter.startDate,
        endDate: state.filter.endDate,
    }),
    { onChange: updateFilterAndGetData }
)(components.StartDateInput)

export const EndDateInput = connect(
    state => ({
        initialValue: state.filter.endDate,
        startDate: state.filter.startDate,
    }),
    { onChange: updateFilterAndGetData }
)(components.EndDateInput)

export const IntervalDropDown = connect(
    state => ({ value: state.filter.interval }),
    { onChange: updateFilterAndGetData }
)(components.IntervalDropDown)

export const AggregationLevelDropDown = connect(
    state => ({ value: state.filter.aggregationLevel }),
    { onChange: updateFilter }
)(components.AggregationLevelDropDown)

export const ChartTypeDropDown = connect(
    state => ({ value: state.filter.chartType }),
    { onChange: updateFilter }
)(components.ChartTypeDropDown)

export const EventTypeDropDown = connect(
    state => ({ value: state.filter.eventType }),
    { onChange: updateFilterAndGetData }
)(components.EventTypeDropDown)

export const PageSizeDropDown = connect(
    state => ({ value: state.filter.pageSize }),
    { onChange: updateFilterAndGetData }
)(components.PageSizeDropDown)

export const SortOrderDropDown = connect(
    state => ({ value: state.filter.sortOrder }),
    { onChange: updateFilterAndGetData }
)(components.SortOrderDropDown)
