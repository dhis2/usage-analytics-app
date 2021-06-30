import { shallow } from 'enzyme'
import React from 'react'
import LayoutSidebar from './LayoutSidebar.js'

describe('<LayoutSidebar>', () => {
    it('renders without errors', () => {
        shallow(<LayoutSidebar />)
    })
})
