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
    { onChange: ({ selected: { value } }) => updateCategory(value) }
)(DropDowns.Category)

export const DateRange = connect(mapDateRangeProps, {
    updateFilter,
    updateUsageData,
})(DateRangeComponent)

export const IntervalDropDown = connect(
    createValueGetterForFilterKey('interval'),
    {
        onChange: ({ selected: { value } }) =>
            updateFilterAndGetData('interval', value),
    }
)(DropDowns.Interval)

export const AggregationLevelDropDown = connect(
    createValueGetterForFilterKey('aggregationLevel'),
    {
        onChange: ({ selected: { value } }) =>
            updateFilter('aggregationLevel', value),
    }
)(DropDowns.AggregationLevel)

export const ChartTypeDropDown = connect(
    createValueGetterForFilterKey('chartType'),
    { onChange: ({ selected: { value } }) => updateFilter('chartType', value) }
)(DropDowns.ChartType)

export const EventTypeDropDown = connect(
    createValueGetterForFilterKey('eventType'),
    {
        onChange: ({ selected: { value } }) =>
            updateFilterAndGetData('eventType', value),
    }
)(DropDowns.EventType)

export const PageSizeDropDown = connect(
    createValueGetterForFilterKey('pageSize'),
    {
        onChange: ({ selected: { value } }) =>
            updateFilterAndGetData('pageSize', value),
    }
)(DropDowns.PageSize)

export const SortOrderDropDown = connect(
    createValueGetterForFilterKey('sortOrder'),
    {
        onChange: ({ selected: { value } }) =>
            updateFilterAndGetData('sortOrder', value),
    }
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
