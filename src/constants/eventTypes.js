import i18n from '@dhis2/d2-i18n'

export const VISUALIZATION_VIEW = 'VISUALIZATION_VIEW'
export const MAP_VIEW = 'MAP_VIEW'
export const EVENT_REPORT_VIEW = 'EVENT_REPORT_VIEW'
export const EVENT_CHART_VIEW = 'EVENT_CHART_VIEW'
export const DASHBOARD_VIEW = 'DASHBOARD_VIEW'
export const DATA_SET_REPORT_VIEW = 'DATA_SET_REPORT_VIEW'

const eventTypes = [
    { value: VISUALIZATION_VIEW, label: i18n.t('Visualization') },
    { value: MAP_VIEW, label: i18n.t('Map') },
    {
        value: EVENT_REPORT_VIEW,
        label: i18n.t('Event report'),
    },
    {
        value: EVENT_CHART_VIEW,
        label: i18n.t('Event chart'),
    },
    { value: DASHBOARD_VIEW, label: i18n.t('Dashboard') },
    {
        value: DATA_SET_REPORT_VIEW,
        label: i18n.t('Data set report'),
    },
]

export default eventTypes
