import { mount } from 'enzyme'
import React from 'react'
import eventTypes, {
    VISUALIZATION_VIEW,
    MAP_VIEW,
} from '../../constants/eventTypes.js'
import EventTypeField from './EventTypeField.jsx'

describe('<EventTypeField>', () => {
    it('has the expected label', () => {
        const props = {
            eventType: VISUALIZATION_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const selector = 'label'
        const label = wrapper.find(selector)

        expect(wrapper.exists(selector)).toBe(true)
        expect(label.text()).toBe('Event Type')
    })

    it('shows the current selection', () => {
        const props = {
            eventType: VISUALIZATION_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Visualization')
    })

    it('shows the expected options', () => {
        const props = {
            eventType: VISUALIZATION_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(6)

        options.forEach((option, i) => {
            expect(option.text()).toBe(eventTypes[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setEventType with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            eventType: VISUALIZATION_VIEW,
            setEventType: spy,
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        // Find an option that is not currently selected
        const target = wrapper.find({
            value: MAP_VIEW,
        })

        // Select the option
        target.simulate('click')

        expect(spy).toHaveBeenCalledWith(MAP_VIEW)

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })
})
