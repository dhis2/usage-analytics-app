import { connect } from 'react-redux'
import * as DropDowns from './dropDownComponents'
import DateRangeComponent from './DateRange'
import {
    updateCategory,
    updateFilterAndGetData,
    updateFilter,
    updateUsageData,
} from '../../actions'

export const CategoryDropDown = connect(
    createValueGetterForFilterKey('category'),
    { onChange: ({ selected }) => updateCategory('category', selected) }
)(DropDowns.Category)

export const DateRange = connect(
    mapDateRangeProps,
    { updateFilter, updateUsageData }
)(DateRangeComponent)

export const IntervalDropDown = connect(
    createValueGetterForFilterKey('interval'),
    { onChange: ({ selected }) => updateFilterAndGetData('interval', selected) }
)(DropDowns.Interval)

export const AggregationLevelDropDown = connect(
    createValueGetterForFilterKey('aggregationLevel'),
    { onChange: ({ selected }) => updateFilter('aggregationLevel', selected) }
)(DropDowns.AggregationLevel)

export const ChartTypeDropDown = connect(
    createValueGetterForFilterKey('chartType'),
    { onChange: ({ selected }) => updateFilter('chartType', selected) }
)(DropDowns.ChartType)

export const EventTypeDropDown = connect(
    createValueGetterForFilterKey('eventType'),
    { onChange: ({ selected }) => updateFilterAndGetData('eventType', selected) }
)(DropDowns.EventType)

export const PageSizeDropDown = connect(
    createValueGetterForFilterKey('pageSize'),
    { onChange: ({ selected }) => updateFilterAndGetData('pageSize', selected) }
)(DropDowns.PageSize)

export const SortOrderDropDown = connect(
    createValueGetterForFilterKey('sortOrder'),
    { onChange: ({ selected }) => updateFilterAndGetData('sortOrder', selected) }
)(DropDowns.SortOrder)

export function createValueGetterForFilterKey(key) {
    return function(state) {
        return {
            label: key,
            value: state.filter[key],
        }
    }
}

export function mapDateRangeProps(state) {
    return {
        startDate: state.filter.startDate,
        endDate: state.filter.endDate,
    }
}
