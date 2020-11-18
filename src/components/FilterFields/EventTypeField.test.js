import React from 'react'
import { mount } from 'enzyme'
import eventTypes, { CHART_VIEW, MAP_VIEW } from '../../constants/eventTypes.js'
import EventTypeField from './EventTypeField.js'

describe('<EventTypeField>', () => {
    it('has the expected label', () => {
        const props = {
            eventType: CHART_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const label = wrapper.find('label')

        expect(label).toHaveLength(1)
        expect(label.text()).toBe('Event Type')
    })

    it('shows the current selection', () => {
        const props = {
            eventType: CHART_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const singleselect = wrapper.find({
            'data-test': 'dhis2-uicore-singleselect',
        })

        expect(singleselect.text()).toBe('Chart')
    })

    it('shows the expected options', () => {
        const props = {
            eventType: CHART_VIEW,
            setEventType: () => {},
        }
        const wrapper = mount(<EventTypeField {...props} />)
        const input = wrapper.find({ 'data-test': 'dhis2-uicore-select-input' })

        // Open menu
        input.simulate('click')

        const options = wrapper.find({
            'data-test': 'dhis2-uicore-singleselectoption',
        })

        expect.assertions(7)

        options.forEach((option, i) => {
            expect(option.text()).toBe(eventTypes[i].label)
        })

        // Umounting manually here prevents an act warning caused by Popper
        wrapper.unmount()
    })

    it('calls setEventType with the expected value on selection change', () => {
        const spy = jest.fn()
        const props = {
            eventType: CHART_VIEW,
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
