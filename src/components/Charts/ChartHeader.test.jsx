import { shallow } from 'enzyme'
import React from 'react'
import ChartHeader from './ChartHeader.jsx'

describe('<ChartHeader>', () => {
    it('renders the title in an h4 tag', () => {
        const expected = 'The title'
        const props = {
            title: expected,
            subtitle: 'The subtitle',
        }
        const wrapper = shallow(<ChartHeader {...props} />)
        const title = wrapper.find('h4')

        expect(title.text()).toBe(expected)
    })

    it('renders the subtitle in an h6 tag', () => {
        const expected = 'The subtitle'
        const props = {
            title: 'The title',
            subtitle: expected,
        }
        const wrapper = shallow(<ChartHeader {...props} />)
        const subtitle = wrapper.find('h6')

        expect(subtitle.text()).toBe(expected)
    })
})
