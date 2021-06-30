import { mount } from 'enzyme'
import React from 'react'
import { YEAR } from '../../constants/intervals.js'
import { UsersChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import { UsersTable } from '../Tables/index.js'
import UsersVisualization from './UsersVisualization.js'

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

describe('<UsersVisualization>', () => {
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
        const wrapper = mount(<UsersVisualization {...props} />)

        expect(wrapper.exists(UsersChart)).toBe(true)
        expect(wrapper.exists(UsersTable)).toBe(true)
    })
})
