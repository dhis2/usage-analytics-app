import React from 'react'
import { shallow } from 'enzyme'
import { Line } from 'react-chartjs-2'
import { YEAR } from '../../constants/intervals.js'
import DataValuesChart from './DataValuesChart.js'
import ChartWrapper from './ChartWrapper.js'

describe('<DataValuesChart>', () => {
    it('renders the line graph without errors', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<DataValuesChart {...props} />)

        expect(wrapper.exists(Line)).toBe(true)
    })

    it('renders the expected titles', () => {
        const props = {
            data: [],
            interval: YEAR,
        }
        const wrapper = shallow(<DataValuesChart {...props} />)
        const titleComponent = wrapper.find(ChartWrapper)

        expect(titleComponent.prop('title')).toMatchInlineSnapshot(
            `"Data values"`
        )
        expect(titleComponent.prop('subtitle')).toMatchInlineSnapshot(
            `"Number of data values saved in the system"`
        )
    })
})
