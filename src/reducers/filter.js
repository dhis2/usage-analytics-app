import { FILTER_UPDATED } from '../actions/types'
import CATEGORIES from '../constants/categories'
import INTERVALS from '../constants/intervals'
import AGGREGATIONS from '../constants/aggregations'
import CHART_TYPES from '../constants/chartTypes'
import EVENT_TYPES from '../constants/eventTypes'
import SORT_ORDERS from '../constants/sortOrders'
import PAGE_SIZES from '../constants/pageSizes'

export default function filter(
    state = getInitialState(new Date()),
    { type, payload }
) {
    switch (type) {
        case FILTER_UPDATED:
            return {
                ...state,
                [payload.key]: payload.value,
            }
        default:
            return state
    }
}

export function getInitialState(endDate) {
    const startDate = new Date(endDate.valueOf())
    startDate.setMonth(startDate.getMonth() - 4)

    return {
        category: CATEGORIES[0],
        startDate: parseDate(startDate),
        endDate: parseDate(endDate),
        interval: INTERVALS[1],
        aggregationLevel: AGGREGATIONS[0],
        chartType: CHART_TYPES[0],
        eventType: EVENT_TYPES[0],
        pageSize: PAGE_SIZES[4],
        sortOrder: SORT_ORDERS[0],
    }
}

export function parseDate(date) {
    const year = date.getFullYear()
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}
