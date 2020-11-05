import i18n from '@dhis2/d2-i18n'
import moment from 'moment'
import { YEAR, MONTH, WEEK, DAY } from '../constants/intervals.js'

/**
 * This helpers receives 1-indexed months. But moment expects 0-indexed months,
 * so we subtract 1 whenever a month is provided to moment
 */
export const formatIntervalDate = ({ year, month, week, day }, interval) => {
    switch (interval) {
        case YEAR: {
            return moment({ year }).format('YYYY')
        }

        case MONTH: {
            const zeroIndexedMonth = month - 1
            const format = 'MMM YYYY'
            return moment({ year, month: zeroIndexedMonth }).format(format)
        }

        case WEEK: {
            const format = `[${i18n.t('Week')}] [${week}] / YYYY`
            return moment({ year }).format(format)
        }

        case DAY: {
            const zeroIndexedMonth = month - 1
            const format = 'MMM D, YYYY'
            return moment({ year, month: zeroIndexedMonth, day }).format(format)
        }
    }
}
