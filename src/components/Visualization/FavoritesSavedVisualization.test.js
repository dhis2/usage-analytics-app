import React from 'react'
import { mount } from 'enzyme'
import { YEAR } from '../../constants/intervals.js'
import { FavoritesSavedTable } from '../Tables/index.js'
import { FavoritesSavedChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import FavoritesSavedVisualization from './FavoritesSavedVisualization.js'

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

describe('<FavoritesSavedVisualization>', () => {
    it('renders the expected components', () => {
        const data = []
        DataStatisticsQuery.mockImplementation(({ children }) => children(data))

        const props = {
            endDate: '',
            interval: YEAR,
            isIntervalStale: false,
            setIsIntervalStale: () => {},
            startDate: '',
        }
        const wrapper = mount(<FavoritesSavedVisualization {...props} />)

        expect(wrapper.exists(FavoritesSavedChart)).toBe(true)
        expect(wrapper.exists(FavoritesSavedTable)).toBe(true)
    })
})
