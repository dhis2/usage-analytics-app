import React from 'react'
import { mount } from 'enzyme'
import chartTypes, { ALL, TOTAL } from '../../constants/chartTypes.js'
import ChartTypeField from './ChartTypeField.js'

describe('<ChartTypeField>', () => {
    it('has the expected label', () => {
        const props = {
            chartType: ALL,
            setChartType: () => {},
        }
        const wrapper = mount(<ChartTypeField {...props} />)
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
        expect(label.text()).toBe('Chart Type')
    })

    it('shows the current selection', () => {
        const props = {
            chartType: ALL,
            setChartType: () => {},
        }
        const wrapper = mount(<ChartTypeField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('All')
    })

    it('shows the expected options', () => {
        const props = {
            chartType: ALL,
            setChartType: () => {},
        }
        const wrapper = mount(<ChartTypeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(2)

        options.forEach((option, i) => {
            expect(option.text()).toBe(chartTypes[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setChartType with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            chartType: ALL,
            setChartType: spy,
        }
        const wrapper = mount(<ChartTypeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: TOTAL,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(TOTAL)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
