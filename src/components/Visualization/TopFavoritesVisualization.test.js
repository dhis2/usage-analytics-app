import React from 'react'
import { mount } from 'enzyme'
import { TopFavoritesTable } from '../Tables/index.js'
import { TopFavoritesQuery } from '../Queries/index.js'
import TopFavoritesVisualization from './TopFavoritesVisualization.js'

// Bypassing the useDataQuery here for simplicity
jest.mock('../Queries/index.js', () => ({
    TopFavoritesQuery: jest.fn(),
}))

describe('<TopFavoritesVisualization>', () => {
    it('renders the expected components', () => {
        const data = []
        TopFavoritesQuery.mockImplementation(({ children }) => children(data))

        const props = {
            eventType: '',
            pageSize: '',
            sortOrder: '',
            countPassiveViews: false,
        }
        const wrapper = mount(<TopFavoritesVisualization {...props} />)

        expect(wrapper.exists(TopFavoritesTable)).toBe(true)
    })
})
