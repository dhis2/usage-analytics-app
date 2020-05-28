import { TOP_FAVORITES } from '../constants/categories'
import { getJSON } from './get'

const api = (() => {
    let baseUrl = null

    const setBaseUrl = url => {
        baseUrl = url
    }

    const getFavorites = ({ eventType, pageSize, sortOrder }) => {
        const queryParams = `eventType=${eventType}&pageSize=${pageSize}&sortOrder=${sortOrder}&_=${Date.now()}`
        return getJSON(baseUrl, `dataStatistics/favorites?${queryParams}`)
    }

    const getDataStatistics = ({ startDate, endDate, interval }) => {
        const queryParams = `startDate=${startDate}&endDate=${endDate}&interval=${interval}&_=${Date.now()}`
        return getJSON(baseUrl, `dataStatistics?${queryParams}`)
    }

    const getUsageData = filter => {
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

    return { setBaseUrl, getFavorites, getDataStatistics, getUsageData }
})()

export default api
