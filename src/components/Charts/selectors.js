import i18n from '@dhis2/d2-i18n'
import CATEGORIES from '../../constants/categories'
import { getIntervalDate } from '../../selectors/date.js'

export const getTitles = selected => {
    const selectedCategory = CATEGORIES.find(
        category => category.value === selected
    )

    return {
        title: selectedCategory.label,
        subtitle: selectedCategory.subtitle,
    }
}

export const getLabels = (data, interval) =>
    data.map(({ year, month, week, day }) =>
        getIntervalDate({ year, month, week, day }, interval)
    )

export const getDataValuesDatasets = data => [
    {
        label: i18n.t('Data Values'),
        data: data.map(d => d.savedDataValues),
        borderColor: '#7cb5ec',
    },
]

export const getUsersDatasets = data => [
    {
        label: i18n.t('Active Users'),
        data: data.map(d => d.activeUsers),
        borderColor: '#7cb5ec',
    },
    {
        label: i18n.t('Total Users'),
        data: data.map(d => d.users),
        borderColor: '#cc6600',
    },
]

export const getFavoritesSavedDatasets = data => [
    {
        label: i18n.t('Maps'),
        data: data.map(d => d.savedMaps),
        borderColor: '#7cb5ec',
    },
    {
        label: i18n.t('Charts'),
        data: data.map(d => d.savedCharts),
        borderColor: '#cc6600',
    },
    {
        label: i18n.t('Pivot Tables'),
        data: data.map(d => d.savedPivotTables),
        borderColor: '#cccc00',
    },
    {
        label: i18n.t('Event Reports'),
        data: data.map(d => d.savedEventReports),
        borderColor: '#66cc00',
    },
    {
        label: i18n.t('Event Charts'),
        data: data.map(d => d.savedEventCharts),
        borderColor: '#ff0066',
    },
    {
        label: i18n.t('Dashboards'),
        data: data.map(d => d.savedDashboards),
        borderColor: '#000000',
    },
    {
        label: i18n.t('Indicators'),
        data: data.map(d => d.savedIndicators),
        borderColor: '#00cccc',
    },
]
