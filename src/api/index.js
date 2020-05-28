import { TOP_FAVORITES } from '../constants/categories'
import { getJSON } from './get'

class Api {
    baseUrl = null

    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl
    }

    getFavorites({ eventType, pageSize, sortOrder }) {
        const queryParams = `eventType=${eventType}&pageSize=${pageSize}&sortOrder=${sortOrder}&_=${Date.now()}`
        return getJSON(this.baseUrl, `dataStatistics/favorites?${queryParams}`)
    }

    getDataStatistics({ startDate, endDate, interval }) {
        const queryParams = `startDate=${startDate}&endDate=${endDate}&interval=${interval}&_=${Date.now()}`
        return getJSON(this.baseUrl, `dataStatistics?${queryParams}`)
    }

    getUsageData(filter) {
        return filter.category === TOP_FAVORITES
            ? this.getFavorites({
                  eventType: filter.eventType,
                  pageSize: filter.pageSize,
                  sortOrder: filter.sortOrder,
              })
            : this.getDataStatistics({
                  startDate: filter.startDate,
                  endDate: filter.endDate,
                  interval: filter.interval,
              })
    }
}

const api = new Api()

export default api
