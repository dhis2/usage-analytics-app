import { TOP_FAVORITES } from '../constants/categories'
import { getJSON } from './get'

export function getFavorites({ eventType, pageSize, sortOrder }) {
    const queryParams = `eventType=${eventType}&pageSize=${pageSize}&sortOrder=${sortOrder}&_=${Date.now()}`
    return getJSON(`dataStatistics/favorites?${queryParams}`)
}

export function getDataStatistics({ startDate, endDate, interval }) {
    const queryParams = `startDate=${startDate}&endDate=${endDate}&interval=${interval}&_=${Date.now()}`
    return getJSON(`dataStatistics?${queryParams}`)
}

export function getUsageData(filter) {
    return filter.category === TOP_FAVORITES
        ? getFavorites({
              eventType: filter.eventType,
              pageSize: filter.pageSize,
              sortOrder: filter.sortOrder,
          })
        : getDataStatistics({
              startDate: filter.startDate,
              endDate: filter.endDate,
              interval: filter.interval,
          })
}
