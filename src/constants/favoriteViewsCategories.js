import i18n from '@dhis2/d2-i18n'

export const SUM_ALL = 'SUM_ALL'
export const SUM_TOTAL = 'SUM_TOTAL'
export const AVEGAGE_ALL = 'AVEGAGE_ALL'
export const AVERAGE_TOTAL = 'AVERAGE_TOTAL'

const FAVORITE_VIEWS_CATEGORIES = [
    { id: SUM_ALL, displayName: i18n.t('All favorite views') },
    { id: SUM_TOTAL, displayName: i18n.t('Total views') },
    {
        id: AVEGAGE_ALL,
        displayName: i18n.t('All favorite average views per user'),
    },
    { id: AVERAGE_TOTAL, displayName: i18n.t('Total views per user') },
]
export default FAVORITE_VIEWS_CATEGORIES
