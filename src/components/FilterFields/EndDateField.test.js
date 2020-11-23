import React from 'react'
import { mount } from 'enzyme'
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
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
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
        const input = wrapper.find('input')

        expect(input).toHaveLength(1)
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
        const error = wrapper.find({
            'data-test': 'dhis2-uiwidgets-inputfield-validation',
        })

        expect(error).toHaveLength(1)
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
