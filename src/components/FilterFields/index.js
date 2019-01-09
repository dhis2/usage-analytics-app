import { connect } from 'react-redux'
import * as components from './filterComponents'
import {
    updateCategory,
    updateFilterAndGetData,
    updateFilter,
} from '../../actions'

export const CategoryDropDown = connect(
    createValueGetterForFilterKey('category'),
    { onChange: updateCategory }
)(components.CategoryDropDown)

export const StartDateInput = connect(
    mapStartDateProps,
    { onChange: updateFilterAndGetData }
)(components.StartDateInput)

export const EndDateInput = connect(
    mapEndDateProps,
    { onChange: updateFilterAndGetData }
)(components.EndDateInput)

export const IntervalDropDown = connect(
    createValueGetterForFilterKey('interval'),
    { onChange: updateFilterAndGetData }
)(components.IntervalDropDown)

export const AggregationLevelDropDown = connect(
    createValueGetterForFilterKey('aggregationLevel'),
    { onChange: updateFilter }
)(components.AggregationLevelDropDown)

export const ChartTypeDropDown = connect(
    createValueGetterForFilterKey('chartType'),
    { onChange: updateFilter }
)(components.ChartTypeDropDown)

export const EventTypeDropDown = connect(
    createValueGetterForFilterKey('eventType'),
    { onChange: updateFilterAndGetData }
)(components.EventTypeDropDown)

export const PageSizeDropDown = connect(
    createValueGetterForFilterKey('pageSize'),
    { onChange: updateFilterAndGetData }
)(components.PageSizeDropDown)

export const SortOrderDropDown = connect(
    createValueGetterForFilterKey('sortOrder'),
    { onChange: updateFilterAndGetData }
)(components.SortOrderDropDown)

export function createValueGetterForFilterKey(key) {
    return function(state) {
        return {
            value: state.filter[key],
        }
    }
}

export function mapStartDateProps(state) {
    return {
        initialValue: state.filter.startDate,
        endDate: state.filter.endDate,
    }
}

export function mapEndDateProps(state) {
    return {
        initialValue: state.filter.endDate,
        startDate: state.filter.startDate,
    }
}
