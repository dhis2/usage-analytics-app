import i18n from '@dhis2/d2-i18n'

export const ASC = 'ASC'
export const DESC = 'DESC'

const SORT_ORDERS = [
    { id: ASC, displayName: i18n.t('Ascending') },
    { id: DESC, displayName: i18n.t('Descending') },
]
export default SORT_ORDERS
