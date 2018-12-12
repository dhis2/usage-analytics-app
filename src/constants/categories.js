import i18n from '@dhis2/d2-i18n'

export const FAVORITE_VIEWS = 'FAVORITE_VIEWS'
export const FAVORITES = 'FAVORITES'
export const USERS = 'USERS'
export const TOP_FAVORITES = 'TOP_FAVORITES'
export const DATA_VALUES = 'DATA_VALUES'

const CATEGORIES = [
    { id: FAVORITE_VIEWS, displayName: i18n.t('Favorite views') },
    { id: FAVORITES, displayName: i18n.t('Favorites') },
    { id: USERS, displayName: i18n.t('Users') },
    { id: TOP_FAVORITES, displayName: i18n.t('Top favorites') },
    { id: DATA_VALUES, displayName: i18n.t('Data values') },
]
export default CATEGORIES
