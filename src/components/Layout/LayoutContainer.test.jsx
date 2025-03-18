import { shallow } from 'enzyme'
import React from 'react'
import LayoutContainer from './LayoutContainer.jsx'

describe('<LayoutContainer>', () => {
    it('renders without errors', () => {
        shallow(<LayoutContainer />)
    })
})
