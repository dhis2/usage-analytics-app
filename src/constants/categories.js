import i18n from '@dhis2/d2-i18n'

export const FAVORITE_VIEWS = 'FAVORITE_VIEWS'
export const FAVORITES_SAVED = 'FAVORITES_SAVED'
export const USERS = 'USERS'
export const TOP_FAVORITES = 'TOP_FAVORITES'
export const DATA_VALUES = 'DATA_VALUES'

const CATEGORIES = [
    { value: FAVORITE_VIEWS, label: i18n.t('Favorite views') },
    { value: FAVORITES_SAVED, label: i18n.t('Favorites saved') },
    { value: USERS, label: i18n.t('Users') },
    { value: TOP_FAVORITES, label: i18n.t('Top favorites') },
    { value: DATA_VALUES, label: i18n.t('Data values') },
]
export default CATEGORIES
