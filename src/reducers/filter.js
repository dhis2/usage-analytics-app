import { getYearMonthDayString } from '../utils/date'
import * as TYPES from '../actions/types'
import { FAVORITE_VIEWS } from '../constants/categories'
import { WEEK } from '../constants/intervals'
import { SUM } from '../constants/aggregations'
import { TOTAL } from '../constants/chartTypes'
import { CHART_VIEW } from '../constants/eventTypes'
import { ASC } from '../constants/sortOrders'

const initialState = {
    category: FAVORITE_VIEWS,
    startDate: getYearMonthDayString(new Date(), -4),
    endDate: getYearMonthDayString(new Date()),
    interval: WEEK,
    aggregationLevel: SUM,
    chartType: TOTAL,
    eventType: CHART_VIEW,
    pageSize: 25,
    sortOrder: ASC,
}

export default function filter(state = initialState, { type, payload }) {
    switch (type) {
        case TYPES.CATEGORY_UPDATED:
            return {
                ...state,
                category: payload,
            }
        case TYPES.START_DATE_UPDATED:
            return {
                ...state,
                startDate: payload,
            }
        case TYPES.END_DATE_UPDATED:
            return {
                ...state,
                endDate: payload,
            }
        case TYPES.INTERVAL_UPDATED:
            return {
                ...state,
                interval: payload,
            }
        case TYPES.AGGREGATION_LEVEL_UPDATED:
            return {
                ...state,
                aggregateLevel: payload,
            }
        case TYPES.CHART_TYPE_UPDATED:
            return {
                ...state,
                chartType: payload,
            }
        case TYPES.EVENT_TYPE_UPDATED:
            return {
                ...state,
                eventType: payload,
            }
        case TYPES.PAGE_SIZE_UPDATED:
            return {
                ...state,
                pageSize: payload,
            }
        case TYPES.SORT_ORDER_UPDATED:
            return {
                ...state,
                sortOrder: payload,
            }
        default:
            return state
    }
}
