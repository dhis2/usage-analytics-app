import React from 'react'
import { mount } from 'enzyme'
import StartDateField from './StartDateField.js'

describe('<StartDateField>', () => {
    it('has the expected label', () => {
        const props = {
            startDate: '',
            setStartDate: () => {},
            startDateError: '',
            setStartDateError: () => {},
        }
        const wrapper = mount(<StartDateField {...props} />)
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
        expect(label.text()).toBe('Start Date')
    })

    it('shows the current start date', () => {
        const expected = '2000-10-01'
        const props = {
            startDate: expected,
            setStartDate: () => {},
            startDateError: '',
            setStartDateError: () => {},
        }
        const wrapper = mount(<StartDateField {...props} />)
        const input = wrapper.find('input')

        expect(input).toHaveLength(1)
        expect(input.prop('value')).toBe(expected)
    })

    it('should call setStartDate on change', () => {
        const spy = jest.fn()
        const expected = '2000-12-15'
        const props = {
            startDate: '',
            setStartDate: spy,
            startDateError: '',
            setStartDateError: () => {},
        }
        const wrapper = mount(<StartDateField {...props} />)
        const input = wrapper.find('input')

        input
            .simulate('change', { target: { value: expected } })
            .simulate('blur')

        expect(spy).toHaveBeenCalledWith(expected)
    })

    it('shows validation errors', () => {
        const expected = 'A validation error'
        const props = {
            startDate: '',
            setStartDate: () => {},
            startDateError: expected,
            setStartDateError: () => {},
        }
        const wrapper = mount(<StartDateField {...props} />)
        const error = wrapper.find({
            'data-test': 'dhis2-uiwidgets-inputfield-validation',
        })

        expect(error).toHaveLength(1)
        expect(error.text()).toBe(expected)
    })

    it('should call setStartDateError on change to an invalid date', () => {
        const spy = jest.fn()
        const value = 'invalid date'
        const props = {
            startDate: '',
            setStartDate: () => {},
            startDateError: '',
            setStartDateError: spy,
        }
        const wrapper = mount(<StartDateField {...props} />)
        const input = wrapper.find('input')

        input.simulate('change', { target: { value } }).simulate('blur')

        expect(spy).toHaveBeenCalled()
        expect(spy.mock.calls[0][0]).toMatchInlineSnapshot(
            `"Please use the format yyyy-mm-dd"`
        )
    })
})
