import { mount } from 'enzyme'
import React from 'react'
import intervals, { DAY, WEEK } from '../../constants/intervals.js'
import IntervalField from './IntervalField.jsx'

describe('<IntervalField>', () => {
    it('has the expected label', () => {
        const props = {
            interval: DAY,
            setReportInterval: () => {},
        }
        const wrapper = mount(<IntervalField {...props} />)
        const selector = 'label'
        const label = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(label.text()).toBe('Interval')
    })

    it('shows the current selection', () => {
        const props = {
            interval: DAY,
            setReportInterval: () => {},
        }
        const wrapper = mount(<IntervalField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Day')
    })

    it('shows the expected options', () => {
        const props = {
            interval: DAY,
            setReportInterval: () => {},
        }
        const wrapper = mount(<IntervalField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(4)

        options.forEach((option, i) => {
            expect(option.text()).toBe(intervals[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setReportInterval with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            interval: DAY,
            setReportInterval: spy,
        }
        const wrapper = mount(<IntervalField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: WEEK,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(WEEK)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
