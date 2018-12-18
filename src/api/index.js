import { get as rawGet } from 'ui/utils/api'
import { setLocale } from '../utils/locale'
import { TOP_FAVORITES } from '../constants/categories'

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

export function getUsageData(filter) {
    return filter.category === TOP_FAVORITES
        ? getFavorites(filter)
        : getDataStatistics(filter)
}

function getFavorites({ eventType, pageSize, sortOrder }) {
    const queryParams = `eventType=${eventType}&pageSize=${pageSize}&sortOrder=${sortOrder}&_=${Date.now()}`
    return get(`dataStatistics/favorites?${queryParams}`)
}

function getDataStatistics({ startDate, endDate, interval }) {
    const queryParams = `startDate=${startDate}&endDate=${endDate}&interval=${interval}&_=${Date.now()}`
    return get(`dataStatistics?${queryParams}`)
}

function getUserLocale() {
    return get('userSettings').then(userSettings => userSettings.keyUiLocale)
}

function get(path) {
    return rawGet(path)
        .then(response => response.json())
        .then(json => json)
}
