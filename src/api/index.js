import { setLocale } from '../utils/locale'
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

export function getUserLocale() {
    return getJSON('userSettings')
        .then(userSettings => userSettings.keyUiLocale)
}

export function getUsageData(filter) {
    return filter.category === TOP_FAVORITES
        ? getFavorites(filter)
        : getDataStatistics(filter)
}

export function initApp({ filter }) {
    return Promise.all([getUserLocale(), getUsageData(filter)]).then(
        ([locale, usageData]) => {
            setLocale(locale)
            return {
                usageData,
                locale,
            }
        }
    )
}
