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

export function getYearMonthDayString(date, offset) {
    if (offset) {
        date.setMonth(date.getMonth() + offset)
    }

    let year = date.getFullYear()
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

export function getDisplayDateForInterval(
    { year, month, week, day },
    interval
) {
    switch (interval) {
        case YEAR:
            return year
        case MONTH:
            return getDisplayDateFromIsoString(
                `${year}-${month}`,
                dateFormats.yyyymm
            )
        case WEEK:
            return `${weekStr} ${week} / ${year}`
        case DAY:
        default:
            return getDisplayDateFromIsoString(`${year}-${month}-${day}`)
    }
}

export function getDisplayDateFromIsoString(
    isoString,
    dateFormatOptions = dateFormats.yyyymmdd
) {
    const { locale } = store.getState()
    const date = new Date(isoString)

    return new Intl.DateTimeFormat(locale, dateFormatOptions).format(date)
}
