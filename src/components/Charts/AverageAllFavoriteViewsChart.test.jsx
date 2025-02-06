import { shallow } from 'enzyme'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { YEAR } from '../../constants/intervals.js'
import AverageAllFavoriteViewsChart from './AverageAllFavoriteViewsChart.jsx'
import ChartWrapper from './ChartWrapper.jsx'

describe('<AverageAllFavoriteViewsChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<AverageAllFavoriteViewsChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<AverageAllFavoriteViewsChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(
            `"Favorite views"`
        )
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of times users looked at analysis favorites"`
        )
    })
})
