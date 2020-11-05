import i18n from '@dhis2/d2-i18n'
import { YEAR, MONTH, WEEK, DAY } from '../constants/intervals.js'

export const getDisplayDateForInterval = (
    { year, month, week, day },
    interval,
    locale
) => {
    switch (interval) {
        case YEAR:
            return year
        case MONTH:
            return getDisplayDateFromYearMonthDay({ year, month }, locale)
        case WEEK:
            return `${i18n.t('Week')} ${week} / ${year}`
        case DAY:
            return getDisplayDateFromYearMonthDay({ year, month, day }, locale)
    }
}

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

function getDisplayDateFromYearMonthDay({ year, month, day }, locale) {
    const date = day
        ? new Date(year, month - 1, day)
        : new Date(year, month - 1)
    const format = day ? dateFormats.yyyymmdd : dateFormats.yyyymm

    return getDisplayDate(date, format, locale)
}

function getDisplayDate(date, dateFormatOptions, locale) {
    return new Intl.DateTimeFormat(locale, dateFormatOptions).format(date)
}
