import React from 'react'
import { mount } from 'enzyme'
import aggregations, { SUM, AVERAGE } from '../../constants/aggregations.js'
import AggregationField from './AggregationField.js'

describe('<AggregationField>', () => {
    it('has the expected label', () => {
        const props = {
            aggregation: SUM,
            setAggregation: () => {},
        }
        const wrapper = mount(<AggregationField {...props} />)
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
        expect(label.text()).toBe('Aggregation Level')
    })

    it('shows the current selection', () => {
        const props = {
            aggregation: SUM,
            setAggregation: () => {},
        }
        const wrapper = mount(<AggregationField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Sum')
    })

    it('shows the expected options', () => {
        const props = {
            aggregation: SUM,
            setAggregation: () => {},
        }
        const wrapper = mount(<AggregationField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(2)

        options.forEach((option, i) => {
            expect(option.text()).toBe(aggregations[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setAggregation with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            aggregation: SUM,
            setAggregation: spy,
        }
        const wrapper = mount(<AggregationField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: AVERAGE,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(AVERAGE)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
