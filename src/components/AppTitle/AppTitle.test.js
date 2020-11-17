import React from 'react'
import { shallow } from 'enzyme'
import AppTitle from './AppTitle.js'

describe('<AppTitle>', () => {
    it('renders the expected app title', () => {
        const wrapper = shallow(<AppTitle />)

        expect(wrapper.text()).toBe('Usage Analytics')
    })
})
