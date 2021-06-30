import { mount } from 'enzyme'
import React from 'react'
import EndDateField from './EndDateField.js'

describe('<EndDateField>', () => {
    it('has the expected label', () => {
        const props = {
            endDate: '',
            setEndDate: () => {},
            endDateError: '',
            setEndDateError: () => {},
        }
        const wrapper = mount(<EndDateField {...props} />)
        const selector = 'label'
        const label = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(label.text()).toBe('End Date')
    })

    it('shows the current end date', () => {
        const expected = '2000-10-01'
        const props = {
            endDate: expected,
            setEndDate: () => {},
            endDateError: '',
            setEndDateError: () => {},
        }
        const wrapper = mount(<EndDateField {...props} />)
        const selector = 'input'
        const input = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(input.prop('value')).toBe(expected)
    })

    it('should call setEndDate on change', () => {
        const spy = jest.fn()
        const expected = '2000-12-15'
        const props = {
            endDate: '',
            setEndDate: spy,
            endDateError: '',
            setEndDateError: () => {},
        }
        const wrapper = mount(<EndDateField {...props} />)
        const input = wrapper.find('input')

        input
            .simulate('change', { target: { value: expected } })
            .simulate('blur')

        expect(spy).toHaveBeenCalledWith(expected)
    })

    it('shows validation errors', () => {
        const expected = 'A validation error'
        const props = {
            endDate: '',
            setEndDate: () => {},
            endDateError: expected,
            setEndDateError: () => {},
        }
        const wrapper = mount(<EndDateField {...props} />)
        const selector = {
            'data-test': 'dhis2-uiwidgets-inputfield-validation',
        }
        const error = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(error.text()).toBe(expected)
    })

    it('should call setEndDateError on change to an invalid date', () => {
        const spy = jest.fn()
        const value = 'invalid date'
        const props = {
            endDate: '',
            setEndDate: () => {},
            endDateError: '',
            setEndDateError: spy,
        }
        const wrapper = mount(<EndDateField {...props} />)
        const input = wrapper.find('input')

        input.simulate('change', { target: { value } }).simulate('blur')

        expect(spy).toHaveBeenCalled()
        expect(spy.mock.calls[0][0]).toMatchInlineSnapshot(
            `"Please use the format yyyy-mm-dd"`
        )
    })
})
