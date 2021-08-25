import { DATA_VALUES } from '../../constants/categories.js'
import { YEAR } from '../../constants/intervals.js'
import {
    COLOR_1,
    COLOR_2,
    COLOR_3,
    COLOR_4,
    COLOR_5,
    COLOR_6,
    COLOR_7,
    getTitles,
    getLabels,
    getDataValuesDatasets,
    getUsersDatasets,
    getFavoritesSavedDatasets,
    getSumAllFavoriteViewsDatasets,
    getSumTotalFavoriteViewsDatasets,
    getAverageAllFavoriteViewsDatasets,
    getAverageTotalFavoriteViewsDatasets,
} from './selectors.js'

describe('selectors', () => {
    describe('getTitles', () => {
        it('returns the expected titles for a category', () => {
            const actual = getTitles(DATA_VALUES)

            expect(actual.title).toBe('Data values')
            expect(actual.subtitle).toBe(
                'Number of data values saved in the system'
            )
        })
    })

    describe('getLabels', () => {
        it('returns the expected labels for an interval with data', () => {
            const data = [{ year: 2000 }, { year: 2010 }]
            const interval = YEAR
            const expected = ['2000', '2010']

            expect(getLabels(data, interval)).toEqual(expected)
        })
    })

    describe('getDataValuesDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [{ savedDataValues: 1 }]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Data Values',
                },
            ]

            expect(getDataValuesDatasets(data)).toEqual(expected)
        })
    })

    describe('getUsersDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [{ activeUsers: 1, users: 100 }]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Active Users',
                },
                {
                    borderColor: COLOR_2,
                    data: [100],
                    label: 'Total Users',
                },
            ]

            expect(getUsersDatasets(data)).toEqual(expected)
        })
    })

    describe('getFavoritesSavedDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [
                {
                    savedMaps: 1,
                    savedVisualizations: 2,
                    savedEventReports: 4,
                    savedEventCharts: 5,
                    savedDashboards: 6,
                    savedIndicators: 7,
                },
            ]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Maps',
                },
                {
                    borderColor: COLOR_2,
                    data: [2],
                    label: 'Visualizations',
                },
                {
                    borderColor: COLOR_4,
                    data: [4],
                    label: 'Event Reports',
                },
                {
                    borderColor: COLOR_5,
                    data: [5],
                    label: 'Event Charts',
                },
                {
                    borderColor: COLOR_6,
                    data: [6],
                    label: 'Dashboards',
                },
                {
                    borderColor: COLOR_7,
                    data: [7],
                    label: 'Indicators',
                },
            ]

            expect(getFavoritesSavedDatasets(data)).toEqual(expected)
        })
    })

    describe('getSumAllFavoriteViewsDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [
                {
                    mapViews: 1,
                    visualizationViews: 2,
                    eventReportViews: 4,
                    eventChartViews: 5,
                    dashboardViews: 6,
                    dataSetReportViews: 7,
                },
            ]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Map',
                },
                {
                    borderColor: COLOR_2,
                    data: [2],
                    label: 'Visualization',
                },
                {
                    borderColor: COLOR_4,
                    data: [4],
                    label: 'Event Report',
                },
                {
                    borderColor: COLOR_5,
                    data: [5],
                    label: 'Event Chart',
                },
                {
                    borderColor: COLOR_6,
                    data: [6],
                    label: 'Dashboard',
                },
                {
                    borderColor: COLOR_7,
                    data: [7],
                    label: 'Data Set Report',
                },
            ]

            expect(getSumAllFavoriteViewsDatasets(data)).toEqual(expected)
        })
    })

    describe('getSumTotalFavoriteViewsDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [{ totalViews: 1 }]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Total',
                },
            ]

            expect(getSumTotalFavoriteViewsDatasets(data)).toEqual(expected)
        })
    })

    describe('getAverageAllFavoriteViewsDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [
                {
                    averageMapViews: 1,
                    averageVisualizationViews: 2,
                    averageEventReportViews: 4,
                    averageEventChartViews: 5,
                    averageDashboardViews: 6,
                },
            ]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Average Map',
                },
                {
                    borderColor: COLOR_2,
                    data: [2],
                    label: 'Average Visualization',
                },
                {
                    borderColor: COLOR_4,
                    data: [4],
                    label: 'Average Event Report',
                },
                {
                    borderColor: COLOR_5,
                    data: [5],
                    label: 'Average Event Chart',
                },
                {
                    borderColor: COLOR_6,
                    data: [6],
                    label: 'Average Dashboard',
                },
            ]

            expect(getAverageAllFavoriteViewsDatasets(data)).toEqual(expected)
        })
    })

    describe('getAverageTotalFavoriteViewsDatasets', () => {
        it('returns the expected datasets', () => {
            const data = [{ averageViews: 1 }]
            const expected = [
                {
                    borderColor: COLOR_1,
                    data: [1],
                    label: 'Average',
                },
            ]

            expect(getAverageTotalFavoriteViewsDatasets(data)).toEqual(expected)
        })
    })
})
