import { mount } from 'enzyme'
import React from 'react'
import categories, {
    FAVORITE_VIEWS,
    FAVORITES_SAVED,
} from '../../constants/categories.js'
import CategoryField from './CategoryField.js'

describe('<CategoryField>', () => {
    it('has the expected label', () => {
        const props = {
            category: FAVORITE_VIEWS,
            setCategory: () => {},
        }
        const wrapper = mount(<CategoryField {...props} />)
        const selector = 'label'
        const label = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(label.text()).toBe('Category')
    })

    it('shows the current selection', () => {
        const props = {
            category: FAVORITE_VIEWS,
            setCategory: () => {},
        }
        const wrapper = mount(<CategoryField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Favorite views')
    })

    it('shows the expected options', () => {
        const props = {
            category: FAVORITE_VIEWS,
            setCategory: () => {},
        }
        const wrapper = mount(<CategoryField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(5)

        options.forEach((option, i) => {
            expect(option.text()).toBe(categories[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setCategory with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            category: FAVORITE_VIEWS,
            setCategory: spy,
        }
        const wrapper = mount(<CategoryField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: FAVORITES_SAVED,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(FAVORITES_SAVED)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
