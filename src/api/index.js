import { TOP_FAVORITES } from '../constants/categories'
import { getJSON } from './get'

export function getFavorites({ eventType, pageSize, sortOrder }, context) {
    const queryParams = `eventType=${eventType}&pageSize=${pageSize}&sortOrder=${sortOrder}&_=${Date.now()}`
    return getJSON(`dataStatistics/favorites?${queryParams}`, context)
}

export function getDataStatistics({ startDate, endDate, interval }, context) {
    const queryParams = `startDate=${startDate}&endDate=${endDate}&interval=${interval}&_=${Date.now()}`
    return getJSON(`dataStatistics?${queryParams}`, context)
}

export function getUsageData(filter, context) {
    return filter.category === TOP_FAVORITES
        ? getFavorites(
              {
                  eventType: filter.eventType,
                  pageSize: filter.pageSize,
                  sortOrder: filter.sortOrder,
              },
              context
          )
        : getDataStatistics(
              {
                  startDate: filter.startDate,
                  endDate: filter.endDate,
                  interval: filter.interval,
              },
              context
          )
}
