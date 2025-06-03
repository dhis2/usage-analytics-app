import { shallow } from 'enzyme'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { YEAR } from '../../constants/intervals.js'
import ChartWrapper from './ChartWrapper.jsx'
import SumAllFavoriteViewsChart from './SumAllFavoriteViewsChart.jsx'

describe('<SumAllFavoriteViewsChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<SumAllFavoriteViewsChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<SumAllFavoriteViewsChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(
            `"Favorite views"`
        )
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of times users looked at analysis favorites"`
        )
    })
})
