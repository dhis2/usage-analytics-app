import { get as rawGet } from 'ui/utils/api'
import store from '../store'

export async function initApp() {
    console.log('running?', get, store.getState())
    const locale = await getUserLocale()
    const statistics = await getStatistics()
    console.log('I go your locale', locale, statistics)
}

export function getStatistics() {
    return get(`dataStatistics?${parseFilterQueryParams()}`)
}

function getUserLocale() {
    return get('userSettings').then(userSettings => userSettings.keyUiLocale)
}

function get(path) {
    return rawGet(path)
        .then(response => response.json())
        .then(json => json)
}

function parseFilterQueryParams() {
    // const state = store.getState();
    return `startDate=2018-8-11&endDate=2018-12-11&interval=WEEK&_=${Date.now()}`
}
