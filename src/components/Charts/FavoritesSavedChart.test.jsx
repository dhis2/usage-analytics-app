import { shallow } from 'enzyme'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { YEAR } from '../../constants/intervals.js'
import ChartWrapper from './ChartWrapper.jsx'
import FavoritesSavedChart from './FavoritesSavedChart.jsx'

describe('<FavoritesSavedChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<FavoritesSavedChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
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
