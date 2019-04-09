import store from '../store'
import { YEAR, MONTH, WEEK, DAY } from '../constants/intervals'
import i18n from '@dhis2/d2-i18n'

const dateFormats = {
    yyyymmdd: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    },
    yyyymm: {
        month: 'short',
        year: 'numeric',
    },
}

const weekStr = i18n.t('Week')

export function getDisplayDateForInterval(
    { year, month, week, day },
    interval
) {
    switch (interval) {
        case YEAR:
            return year
        case MONTH:
            return getDisplayDateFromYearMonthDay(year, month)
        case WEEK:
            return `${weekStr} ${week} / ${year}`
        case DAY:
        default:
            return getDisplayDateFromYearMonthDay(year, month, day)
    }
}

export function getDisplayDateFromIsoString(isoString) {
    const date = new Date(isoString)
    return getDisplayDate(date, dateFormats.yyyymmdd)
}

export function getDisplayDateFromYearMonthDay(year, month, day) {
    const date = day
        ? new Date(year, month - 1, day)
        : new Date(year, month - 1)
    const format = day ? dateFormats.yyyymmdd : dateFormats.yyyymm
    return getDisplayDate(date, format)
}

function getDisplayDate(date, dateFormatOptions) {
    const state = store.getState()
    const locale = state.locale || 'en'
    return new Intl.DateTimeFormat(locale, dateFormatOptions).format(date)
}
