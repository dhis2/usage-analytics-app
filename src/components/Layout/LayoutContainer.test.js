import React from 'react'
import { shallow } from 'enzyme'
import LayoutContainer from './LayoutContainer.js'

describe('<LayoutContainer>', () => {
    it('renders without errors', () => {
        shallow(<LayoutContainer />)
    })
})
