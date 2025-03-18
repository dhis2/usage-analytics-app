import { mount } from 'enzyme'
import React from 'react'
import { YEAR } from '../../constants/intervals.js'
import { DataValuesChart } from '../Charts/index.js'
import { DataStatisticsQuery } from '../Queries/index.js'
import { DataValuesTable } from '../Tables/index.js'
import DataValuesVisualization from './DataValuesVisualization.jsx'

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

describe('<DataValuesVisualization>', () => {
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
        const wrapper = mount(<DataValuesVisualization {...props} />)

        expect(wrapper.exists(DataValuesChart)).toBe(true)
        expect(wrapper.exists(DataValuesTable)).toBe(true)
    })
})
