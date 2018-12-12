import i18n from '@dhis2/d2-i18n'

export const DAY = 'DAY'
export const WEEK = 'WEEK'
export const MONTH = 'MONTH'
export const YEAR = 'YEAR'

const INTERVALS = [
    { id: DAY, displayName: i18n.t('Day') },
    { id: WEEK, displayName: i18n.t('Week') },
    { id: MONTH, displayName: i18n.t('Month') },
    { id: YEAR, displayName: i18n.t('Year') },
]
export default INTERVALS
