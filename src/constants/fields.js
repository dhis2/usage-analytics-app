import * as CATS from './categories'
import * as FAV_VIEW_CATS from './favoriteViewsCategories'
import * as PROPS from './properties'

const FAVORITE_VIEWS_TOTAL_FIELDS = [
    PROPS.date,
    PROPS.mapViews,
    PROPS.chartViews,
    PROPS.pivotTableViews,
    PROPS.eventReportViews,
    PROPS.eventChartViews,
    PROPS.dashboardViews,
    PROPS.dataSetReportViews,
    PROPS.totalViews,
]

const FAVORITE_VIEWS_AVERAGE_FIELDS = [
    PROPS.date,
    PROPS.averageMapViews,
    PROPS.averageChartViews,
    PROPS.averagePivotTableViews,
    PROPS.averageEventReportViews,
    PROPS.averageEventChartViews,
    PROPS.averageDashboardViews,
    PROPS.averageViews,
]

export const FIELDS = {
    [CATS.FAVORITE_VIEWS]: {
        [FAV_VIEW_CATS.SUM_ALL]: FAVORITE_VIEWS_TOTAL_FIELDS,
        [FAV_VIEW_CATS.SUM_TOTAL]: FAVORITE_VIEWS_TOTAL_FIELDS,
        [FAV_VIEW_CATS.AVERAGE_ALL]: FAVORITE_VIEWS_AVERAGE_FIELDS,
        [FAV_VIEW_CATS.AVERAGE_TOTAL]: FAVORITE_VIEWS_AVERAGE_FIELDS,
    },
    [CATS.FAVORITES_SAVED]: [
        PROPS.date,
        PROPS.savedMaps,
        PROPS.savedCharts,
        PROPS.savedPivotTables,
        PROPS.savedEventReports,
        PROPS.savedEventCharts,
        PROPS.savedDashboards,
        PROPS.savedIndicator,
    ],
    [CATS.USERS]: [PROPS.date, PROPS.activeUsers, PROPS.users],
    [CATS.TOP_FAVORITES]: [
        PROPS.position,
        PROPS.name,
        PROPS.views,
        PROPS.id,
        PROPS.created,
    ],
    [CATS.DATA_VALUES]: [PROPS.date, PROPS.savedDataValues],
}
export default FIELDS
