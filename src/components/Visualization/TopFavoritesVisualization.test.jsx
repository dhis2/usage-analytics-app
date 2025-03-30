import { mount } from 'enzyme'
import React from 'react'
import { TopFavoritesQuery } from '../Queries/index.js'
import { TopFavoritesTable } from '../Tables/index.js'
import TopFavoritesVisualization from './TopFavoritesVisualization.jsx'

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
        }
        const wrapper = mount(<TopFavoritesVisualization {...props} />)

        expect(wrapper.exists(TopFavoritesTable)).toBe(true)
    })
})
