import React from 'react'
import { shallow } from 'enzyme'
import LayoutSidebar from './LayoutSidebar.js'

describe('<LayoutSidebar>', () => {
    it('renders without errors', () => {
        shallow(<LayoutSidebar />)
    })
})
