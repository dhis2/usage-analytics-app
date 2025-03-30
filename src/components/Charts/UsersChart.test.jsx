import { shallow } from 'enzyme'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { YEAR } from '../../constants/intervals.js'
import ChartWrapper from './ChartWrapper.jsx'
import UsersChart from './UsersChart.jsx'

describe('<UsersChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<UsersChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<UsersChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(`"Users"`)
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of users in the system"`
        )
    })
})
