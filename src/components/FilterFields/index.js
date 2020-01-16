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
    { onChange: createFilterUpdater(updateFilterAndGetData, 'interval') }
)(DropDowns.Interval)

export const AggregationLevelDropDown = connect(
    createValueGetterForFilterKey('aggregationLevel'),
    { onChange: createFilterUpdater(updateFilter, 'aggregationLevel') }
)(DropDowns.AggregationLevel)

export const ChartTypeDropDown = connect(
    createValueGetterForFilterKey('chartType'),
    { onChange: createFilterUpdater(updateFilter, 'chartType') }
)(DropDowns.ChartType)

export const EventTypeDropDown = connect(
    createValueGetterForFilterKey('eventType'),
    { onChange: createFilterUpdater(updateFilterAndGetData, 'eventType') }
)(DropDowns.EventType)

export const PageSizeDropDown = connect(
    createValueGetterForFilterKey('pageSize'),
    { onChange: createFilterUpdater(updateFilterAndGetData, 'pageSize') }
)(DropDowns.PageSize)

export const SortOrderDropDown = connect(
    createValueGetterForFilterKey('sortOrder'),
    { onChange: createFilterUpdater(updateFilterAndGetData, 'sortOrder') }
)(DropDowns.SortOrder)

export function createValueGetterForFilterKey(key) {
    return function(state) {
        return {
            label: key,
            value: state.filter[key],
        }
    }
}

function createFilterUpdater(updaterFn, filterKey) {
    return function({ selected: { value } }) {
        return updaterFn(filterKey, value)
    }
}

export function mapDateRangeProps(state) {
    return {
        startDate: state.filter.startDate,
        endDate: state.filter.endDate,
    }
}
