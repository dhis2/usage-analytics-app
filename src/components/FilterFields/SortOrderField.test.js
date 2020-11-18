import React from 'react'
import { mount } from 'enzyme'
import sortOrders, { ASC, DESC } from '../../constants/sortOrders.js'
import SortOrderField from './SortOrderField.js'

describe('<SortOrderField>', () => {
    it('has the expected label', () => {
        const props = {
            sortOrder: ASC,
            setSortOrder: () => {},
        }
        const wrapper = mount(<SortOrderField {...props} />)
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
        expect(label.text()).toBe('Sort Order')
    })

    it('shows the current selection', () => {
        const props = {
            sortOrder: ASC,
            setSortOrder: () => {},
        }
        const wrapper = mount(<SortOrderField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Ascending')
    })

    it('shows the expected options', () => {
        const props = {
            sortOrder: ASC,
            setSortOrder: () => {},
        }
        const wrapper = mount(<SortOrderField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(2)

        options.forEach((option, i) => {
            expect(option.text()).toBe(sortOrders[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setSortOrder with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            sortOrder: ASC,
            setSortOrder: spy,
        }
        const wrapper = mount(<SortOrderField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: DESC,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(DESC)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
