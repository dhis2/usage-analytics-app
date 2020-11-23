import React from 'react'
import { mount } from 'enzyme'
import DateRangeField from './DateRangeField.js'

describe('<DateRangeField>', () => {
    it('displays the start and end date', () => {
        const expectedStartDate = '2019-01-01'
        const expectedEndDate = '2020-01-01'
        const props = {
            endDate: expectedEndDate,
            setEndDate: () => {},
            setStartDate: () => {},
            startDate: expectedStartDate,
        }
        const wrapper = mount(<DateRangeField {...props} />)
        const startDate = wrapper
            .find({
                label: 'Start Date',
            })
            .find('input')
        const endDate = wrapper
            .find({
                label: 'End Date',
            })
            .find('input')

        expect(startDate).toHaveLength(1)
        expect(endDate).toHaveLength(1)

        expect(startDate.prop('value')).toBe(expectedStartDate)
        expect(endDate.prop('value')).toBe(expectedEndDate)
    })

    it('shows a date range error on invalid start date change', () => {
        const invalidStartDate = '2030-01-01'
        const props = {
            endDate: '2020-01-01',
            setEndDate: () => {},
            setStartDate: () => {},
            startDate: '2010-01-01',
        }
        const wrapper = mount(<DateRangeField {...props} />)

        /**
         * Enter an invalid date
         */

        const startDateInput = wrapper
            .find({
                label: 'Start Date',
            })
            .find('input')

        startDateInput
            .simulate('change', { target: { value: invalidStartDate } })
            .simulate('blur')

        /**
         * Ensure that both start and end date show an error message
         */

        const startDateError = wrapper
            .find({
                label: 'Start Date',
            })
            .find({
                'data-test': 'dhis2-uiwidgets-inputfield-validation',
            })

        const endDateError = wrapper
            .find({
                label: 'End Date',
            })
            .find({
                'data-test': 'dhis2-uiwidgets-inputfield-validation',
            })

        expect(startDateError.text()).toMatchInlineSnapshot(
            `"Start date should be before end date"`
        )
        expect(endDateError.text()).toMatchInlineSnapshot(
            `"Start date should be before end date"`
        )
    })

    it('shows a date range error on invalid end date change', () => {
        const invalidEndDate = '2000-01-01'
        const props = {
            endDate: '2020-01-01',
            setEndDate: () => {},
            setStartDate: () => {},
            startDate: '2010-01-01',
        }
        const wrapper = mount(<DateRangeField {...props} />)

        /**
         * Enter an invalid date
         */

        const endDateInput = wrapper
            .find({
                label: 'End Date',
            })
            .find('input')

        endDateInput
            .simulate('change', { target: { value: invalidEndDate } })
            .simulate('blur')

        /**
         * Ensure that both start and end date show an error message
         */

        const startDateError = wrapper
            .find({
                label: 'Start Date',
            })
            .find({
                'data-test': 'dhis2-uiwidgets-inputfield-validation',
            })

        const endDateError = wrapper
            .find({
                label: 'End Date',
            })
            .find({
                'data-test': 'dhis2-uiwidgets-inputfield-validation',
            })

        expect(startDateError.text()).toMatchInlineSnapshot(
            `"Start date should be before end date"`
        )
        expect(endDateError.text()).toMatchInlineSnapshot(
            `"Start date should be before end date"`
        )
    })
})
