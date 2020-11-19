import i18n from '@dhis2/d2-i18n'

export const DATA_VALUES = 'DATA_VALUES'
export const FAVORITES_SAVED = 'FAVORITES_SAVED'
export const FAVORITE_VIEWS = 'FAVORITE_VIEWS'
export const TOP_FAVORITES = 'TOP_FAVORITES'
export const USERS = 'USERS'

const categories = [
    {
        value: FAVORITE_VIEWS,
        label: i18n.t('Favorite views'),
        subtitle: i18n.t('Number of times users looked at analysis favorites'),
    },
    {
        value: FAVORITES_SAVED,
        label: i18n.t('Favorites saved'),
        subtitle: i18n.t('Number of analysis favorites created by users'),
    },
    {
        value: USERS,
        label: i18n.t('Users'),
        subtitle: i18n.t('Number of users in the system'),
    },
    {
        /**
         * This doesn't need a subtitle because it doesn't render a graph (which
         * is the component that needs the subtitle).
         */
        value: TOP_FAVORITES,
        label: i18n.t('Top favorites'),
    },
    {
        value: DATA_VALUES,
        label: i18n.t('Data values'),
        subtitle: i18n.t('Number of data values saved in the system'),
    },
]

export default categories
