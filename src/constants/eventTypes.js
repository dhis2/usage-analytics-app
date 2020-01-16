import i18n from '@dhis2/d2-i18n'

export const CHART_VIEW = 'CHART_VIEW'
export const MAP_VIEW = 'MAP_VIEW'
export const REPORT_TABLE_VIEW = 'REPORT_TABLE_VIEW'
export const EVENT_REPORT_VIEW = 'EVENT_REPORT_VIEW'
export const EVENT_CHART_VIEW = 'EVENT_CHART_VIEW'
export const DASHBOARD_VIEW = 'DASHBOARD_VIEW'
export const DATA_SET_REPORT_VIEW = 'DATA_SET_REPORT_VIEW'

const EVENT_TYPES = {
    [CHART_VIEW]: { value: CHART_VIEW, label: i18n.t('Chart') },
    [MAP_VIEW]: { value: MAP_VIEW, label: i18n.t('Map') },
    [REPORT_TABLE_VIEW]: {
        value: REPORT_TABLE_VIEW,
        label: i18n.t('Report table'),
    },
    [EVENT_REPORT_VIEW]: {
        value: EVENT_REPORT_VIEW,
        label: i18n.t('Event report'),
    },
    [EVENT_CHART_VIEW]: {
        value: EVENT_CHART_VIEW,
        label: i18n.t('Event chart'),
    },
    [DASHBOARD_VIEW]: { value: DASHBOARD_VIEW, label: i18n.t('Dashboard') },
    [DATA_SET_REPORT_VIEW]: {
        value: DATA_SET_REPORT_VIEW,
        label: i18n.t('Data set report'),
    },
}

export default EVENT_TYPES
