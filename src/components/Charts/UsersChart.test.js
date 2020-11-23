import React from 'react'
import { shallow } from 'enzyme'
import { Line } from 'react-chartjs-2'
import { USERS } from '../../constants/categories.js'
import { YEAR } from '../../constants/intervals.js'
import UsersChart from './UsersChart.js'
import ChartWrapper from './ChartWrapper.js'

describe('<UsersChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            category: USERS,
            interval: YEAR,
        }
        const wrapper = shallow(<UsersChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            category: USERS,
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
