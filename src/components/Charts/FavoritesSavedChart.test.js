import React from 'react'
import { shallow } from 'enzyme'
import { Line } from 'react-chartjs-2'
import { FAVORITES_SAVED } from '../../constants/categories.js'
import { YEAR } from '../../constants/intervals.js'
import FavoritesSavedChart from './FavoritesSavedChart.js'
import ChartWrapper from './ChartWrapper.js'

describe('<FavoritesSavedChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            category: FAVORITES_SAVED,
            interval: YEAR,
        }
        const wrapper = shallow(<FavoritesSavedChart {...props} />)
        const graph = wrapper.find(Line)

        expect(graph).toHaveLength(1)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            category: FAVORITES_SAVED,
            interval: YEAR,
        }
        const wrapper = shallow(<FavoritesSavedChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(
            `"Favorites saved"`
        )
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of analysis favorites created by users"`
        )
    })
})
