import React from 'react'
import { shallow, mount } from 'enzyme'
import DateRange, {
    START_DATE,
    END_DATE,
    ERROR_PATTERN,
    ERROR_MISSING_DATE,
    ERROR_START_AFTER_END,
    ERROR_END_BEFORE_START,
} from './DateRange'

jest.mock('lodash.debounce', () => fn => fn)

describe('<DateRange/>', () => {
    const updateFilter = jest.fn()
    const updateUsageData = jest.fn()

    const defaultProps = {
        startDate: '2018-09-30',
        endDate: '2018-12-30',
        updateFilter,
        updateUsageData,
    }
    const NOT_A_DATE = 'This is not a date'

    const shallowWrapper = shallow(<DateRange {...defaultProps} />)
    const wrapper = mount(<DateRange {...defaultProps} />)

    const startDateInput = wrapper.find('#startDate')
    const endDateInput = wrapper.find('#endDate')

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('matches the snapshot with default props', () => {
        expect(shallowWrapper).toMatchSnapshot()
    })
    it('renders a date input for startDate', () => {
        expect(startDateInput.prop('type')).toEqual('date')
    })
    it('renders a date input for endDate', () => {
        expect(endDateInput.prop('type')).toEqual('date')
    })
    it('calls updateFilterAndGetData when startDate changes into a valid value', () => {
        const value = '2018-09-20'
        startDateInput.simulate('change', { target: { value } })
        expect(updateUsageData).toHaveBeenCalledTimes(1)
    })
    it('calls updateFilterAndGetData when endDate changes into a valid value', () => {
        const value = '2019-01-20'
        endDateInput.simulate('change', { target: { value } })
        expect(updateUsageData).toHaveBeenCalledTimes(1)
    })
    it('calls updateFilter when startDate changes', () => {
        const value = '2019-12-31'
        startDateInput.simulate('change', { target: { value } })
        expect(updateFilter).toBeCalledWith(START_DATE, value)
    })
    it('calls updateFilter when endDate changes', () => {
        const value = '2016-01-20'
        endDateInput.simulate('change', { target: { value } })
        expect(updateFilter).toBeCalledWith(END_DATE, value)
    })
    it('renders a startDate pattern error when startDate changes into an invalid value', () => {
        const value = NOT_A_DATE

        startDateInput.simulate('change', { target: { value } })

        expect(
            wrapper.find('[data-test="uaa-startdate-validation"]')
        ).toHaveText(ERROR_PATTERN)
    })
    it('renders a missing date error when startDate changes into a valid value but endDate is empty', () => {
        const defaultProps = {
            updateFilter,
            updateUsageData,
        }
        const wrapper = mount(<DateRange {...defaultProps} />)
        const startDateInput = wrapper.find('#startDate')

        startDateInput.simulate('change', { target: { value: '2019-12-30' } })

        expect(
            wrapper.find('[data-test="uaa-startdate-validation"]')
        ).toHaveText(ERROR_MISSING_DATE)
    })
    it('renders a start-after-end error when start date become greater than end date', () => {
        const value = '2020-01-01'
        startDateInput.simulate('change', { target: { value } })
        expect(
            wrapper.find('[data-test="uaa-startdate-validation"]')
        ).toHaveText(ERROR_START_AFTER_END)
    })
    it('renders a end-before-start error when end date become smaller than start date', () => {
        const value = '2005-01-01'
        endDateInput.simulate('change', { target: { value } })
        expect(wrapper.find('[data-test="uaa-enddate-validation"]')).toHaveText(
            ERROR_END_BEFORE_START
        )
    })
    it('when endDate changes into range-error startDate error is cleared', () => {
        startDateInput.simulate('change', { target: { value: '2019-12-30' } })
        endDateInput.simulate('change', { target: { value: '2018-09-29' } })
        expect(
            wrapper.find('[data-test="uaa-startdate-validation"]').length
        ).toEqual(0)
    })
    it('when startDate changes into range-error the endDate error is cleared', () => {
        endDateInput.simulate('change', { target: { value: '2018-09-29' } })
        startDateInput.simulate('change', { target: { value: '2019-12-30' } })
        expect(
            wrapper.find('[data-test="uaa-enddate-validation"]').length
        ).toEqual(0)
    })
    it('when both fields get pattern errors on change both error fields are displayed', () => {
        startDateInput.simulate('change', { target: { value: NOT_A_DATE } })
        endDateInput.simulate('change', { target: { value: NOT_A_DATE } })
        expect(wrapper.find('p.error').length).toEqual(2)
    })
})
