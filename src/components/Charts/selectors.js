import i18n from '@dhis2/d2-i18n'
import CATEGORIES from '../../constants/categories.js'
import { getIntervalDate } from '../../selectors/date.js'

/**
 * The colors for the linegraphs. We're using individual constants
 * so eslint will warn us if we use a constant that doesn't exist.
 */

const COLOR_1 = '#7cb5ec'
const COLOR_2 = '#cc6600'
const COLOR_3 = '#cccc00'
const COLOR_4 = '#66cc00'
const COLOR_5 = '#ff0066'
const COLOR_6 = '#000000'
const COLOR_7 = '#00cccc'

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
        borderColor: COLOR_1,
    },
]

export const getUsersDatasets = data => [
    {
        label: i18n.t('Active Users'),
        data: data.map(d => d.activeUsers),
        borderColor: COLOR_1,
    },
    {
        label: i18n.t('Total Users'),
        data: data.map(d => d.users),
        borderColor: COLOR_2,
    },
]

export const getFavoritesSavedDatasets = data => [
    {
        label: i18n.t('Maps'),
        data: data.map(d => d.savedMaps),
        borderColor: COLOR_1,
    },
    {
        label: i18n.t('Charts'),
        data: data.map(d => d.savedCharts),
        borderColor: COLOR_2,
    },
    {
        label: i18n.t('Pivot Tables'),
        data: data.map(d => d.savedPivotTables),
        borderColor: COLOR_3,
    },
    {
        label: i18n.t('Event Reports'),
        data: data.map(d => d.savedEventReports),
        borderColor: COLOR_4,
    },
    {
        label: i18n.t('Event Charts'),
        data: data.map(d => d.savedEventCharts),
        borderColor: COLOR_5,
    },
    {
        label: i18n.t('Dashboards'),
        data: data.map(d => d.savedDashboards),
        borderColor: COLOR_6,
    },
    {
        label: i18n.t('Indicators'),
        data: data.map(d => d.savedIndicators),
        borderColor: COLOR_7,
    },
]

export const getSumAllFavoriteViewsDatasets = data => [
    {
        label: i18n.t('Map'),
        data: data.map(d => d.mapViews),
        borderColor: COLOR_1,
    },
    {
        label: i18n.t('Chart'),
        data: data.map(d => d.chartViews),
        borderColor: COLOR_2,
    },
    {
        label: i18n.t('Pivot Table'),
        data: data.map(d => d.pivotTableViews),
        borderColor: COLOR_3,
    },
    {
        label: i18n.t('Event Report'),
        data: data.map(d => d.eventReportViews),
        borderColor: COLOR_4,
    },
    {
        label: i18n.t('Event Chart'),
        data: data.map(d => d.eventChartViews),
        borderColor: COLOR_5,
    },
    {
        label: i18n.t('Dashboard'),
        data: data.map(d => d.dashboardViews),
        borderColor: COLOR_6,
    },
    {
        label: i18n.t('Data Set Report'),
        data: data.map(d => d.dataSetReportViews),
        borderColor: COLOR_7,
    },
]

export const getSumTotalFavoriteViewsDatasets = data => [
    {
        label: i18n.t('Total'),
        data: data.map(d => d.totalViews),
        borderColor: COLOR_1,
    },
]

export const getAverageAllFavoriteViewsDatasets = data => [
    {
        label: i18n.t('Average Map'),
        data: data.map(d => d.averageMapViews),
        borderColor: COLOR_1,
    },
    {
        label: i18n.t('Average Chart'),
        data: data.map(d => d.averageChartViews),
        borderColor: COLOR_2,
    },
    {
        label: i18n.t('Average Pivot Table'),
        data: data.map(d => d.averagePivotTableViews),
        borderColor: COLOR_3,
    },
    {
        label: i18n.t('Average Event Report'),
        data: data.map(d => d.averageEventReportViews),
        borderColor: COLOR_4,
    },
    {
        label: i18n.t('Average Event Chart'),
        data: data.map(d => d.averageEventChartViews),
        borderColor: COLOR_5,
    },
    {
        label: i18n.t('Average Dashboard'),
        data: data.map(d => d.averageDashboardViews),
        borderColor: COLOR_6,
    },
]

export const getAverageTotalFavoriteViewsDatasets = data => [
    {
        label: i18n.t('Average'),
        data: data.map(d => d.averageViews),
        borderColor: COLOR_1,
    },
]
