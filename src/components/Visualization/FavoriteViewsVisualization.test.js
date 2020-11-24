import React from 'react'
import { mount } from 'enzyme'
import { YEAR } from '../../constants/intervals.js'
import { SUM, AVERAGE } from '../../constants/aggregations.js'
import { ALL, TOTAL } from '../../constants/chartTypes.js'
import {
    SumAllFavoriteViewsChart,
    SumTotalFavoriteViewsChart,
    AverageAllFavoriteViewsChart,
    AverageTotalFavoriteViewsChart,
} from '../Charts/index.js'
import {
    SumFavoriteViewsTable,
    AverageFavoriteViewsTable,
} from '../Tables/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import FavoriteViewsVisualization from './FavoriteViewsVisualization.js'

// Bypassing the useDataQuery here for simplicity
jest.mock('../Queries/index.js', () => ({
    DataStatisticsQuery: jest.fn(),
}))

/**
 * Chartjs needs canvas to be present, which jsdom doesn't have, so
 * we're mocking it.
 */

jest.mock('react-chartjs-2', () => ({
    Line: () => null,
}))

describe('<FavoriteViewsVisualization>', () => {
    it('renders the expected components for SUM and ALL', () => {
        const data = []
        DataStatisticsQuery.mockImplementation(({ children }) => children(data))

        const props = {
            aggregation: SUM,
            chartType: ALL,
            endDate: '',
            interval: YEAR,
            isIntervalStale: false,
            setIsIntervalStale: () => {},
            startDate: '',
        }
        const wrapper = mount(<FavoriteViewsVisualization {...props} />)

        expect(wrapper.exists(SumAllFavoriteViewsChart)).toBe(true)
        expect(wrapper.exists(SumFavoriteViewsTable)).toBe(true)
    })

    it('renders the expected components for SUM and TOTAL', () => {
        const data = []
        DataStatisticsQuery.mockImplementation(({ children }) => children(data))

        const props = {
            aggregation: SUM,
            chartType: TOTAL,
            endDate: '',
            interval: YEAR,
            isIntervalStale: false,
            setIsIntervalStale: () => {},
            startDate: '',
        }
        const wrapper = mount(<FavoriteViewsVisualization {...props} />)

        expect(wrapper.exists(SumTotalFavoriteViewsChart)).toBe(true)
        expect(wrapper.exists(SumFavoriteViewsTable)).toBe(true)
    })

    it('renders the expected components for AVERAGE and ALL', () => {
        const data = []
        DataStatisticsQuery.mockImplementation(({ children }) => children(data))

        const props = {
            aggregation: AVERAGE,
            chartType: ALL,
            endDate: '',
            interval: YEAR,
            isIntervalStale: false,
            setIsIntervalStale: () => {},
            startDate: '',
        }
        const wrapper = mount(<FavoriteViewsVisualization {...props} />)

        expect(wrapper.exists(AverageAllFavoriteViewsChart)).toBe(true)
        expect(wrapper.exists(AverageFavoriteViewsTable)).toBe(true)
    })

    it('renders the expected components for AVERAGE and TOTAL', () => {
        const data = []
        DataStatisticsQuery.mockImplementation(({ children }) => children(data))

        const props = {
            aggregation: AVERAGE,
            chartType: TOTAL,
            endDate: '',
            interval: YEAR,
            isIntervalStale: false,
            setIsIntervalStale: () => {},
            startDate: '',
        }
        const wrapper = mount(<FavoriteViewsVisualization {...props} />)

        expect(wrapper.exists(AverageTotalFavoriteViewsChart)).toBe(true)
        expect(wrapper.exists(AverageFavoriteViewsTable)).toBe(true)
    })
})
