import * as CATS from './categories'
import * as AGGREG from './aggregations'
import * as PROPS from './properties'

export const FIELDS = {
    [CATS.FAVORITE_VIEWS]: {
        [AGGREG.SUM]: [
            PROPS.date,
            PROPS.mapViews,
            PROPS.chartViews,
            PROPS.pivotTableViews,
            PROPS.eventReportViews,
            PROPS.eventChartViews,
            PROPS.dashboardViews,
            PROPS.dataSetReportViews,
            PROPS.totalViews,
        ],
        [AGGREG.AVERAGE]: [
            PROPS.date,
            PROPS.averageMapViews,
            PROPS.averageChartViews,
            PROPS.averagePivotTableViews,
            PROPS.averageEventReportViews,
            PROPS.averageEventChartViews,
            PROPS.averageDashboardViews,
            PROPS.averageViews,
        ],
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
