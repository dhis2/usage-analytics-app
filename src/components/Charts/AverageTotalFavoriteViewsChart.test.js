import React from 'react'
import { shallow } from 'enzyme'
import { Line } from 'react-chartjs-2'
import { FAVORITE_VIEWS } from '../../constants/categories.js'
import { YEAR } from '../../constants/intervals.js'
import AverageTotalFavoriteViewsChart from './AverageTotalFavoriteViewsChart.js'
import ChartWrapper from './ChartWrapper.js'

describe('<AverageTotalFavoriteViewsChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            category: FAVORITE_VIEWS,
            interval: YEAR,
        }
        const wrapper = shallow(<AverageTotalFavoriteViewsChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            category: FAVORITE_VIEWS,
            interval: YEAR,
        }
        const wrapper = shallow(<AverageTotalFavoriteViewsChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(
            `"Favorite views"`
        )
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of times users looked at analysis favorites"`
        )
    })
})
