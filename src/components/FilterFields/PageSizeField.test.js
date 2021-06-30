import { mount } from 'enzyme'
import React from 'react'
import pageSizes, { PS_5, PS_10 } from '../../constants/pageSizes.js'
import PageSizeField from './PageSizeField.js'

describe('<PageSizeField>', () => {
    it('has the expected label', () => {
        const props = {
            pageSize: PS_5,
            setPageSize: () => {},
        }
        const wrapper = mount(<PageSizeField {...props} />)
        const selector = 'label'
        const label = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(label.text()).toBe('Page Size')
    })

    it('shows the current selection', () => {
        const props = {
            pageSize: PS_5,
            setPageSize: () => {},
        }
        const wrapper = mount(<PageSizeField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('5')
    })

    it('shows the expected options', () => {
        const props = {
            pageSize: PS_5,
            setPageSize: () => {},
        }
        const wrapper = mount(<PageSizeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(5)

        options.forEach((option, i) => {
            expect(option.text()).toBe(pageSizes[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setPageSize with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            pageSize: PS_5,
            setPageSize: spy,
        }
        const wrapper = mount(<PageSizeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: PS_10,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(PS_10)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
