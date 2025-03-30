import { shallow } from 'enzyme'
import React from 'react'
import LayoutSidebar from './LayoutSidebar.jsx'

describe('<LayoutSidebar>', () => {
    it('renders without errors', () => {
        shallow(<LayoutSidebar />)
    })
})
