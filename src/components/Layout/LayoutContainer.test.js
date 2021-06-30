import { shallow } from 'enzyme'
import React from 'react'
import LayoutContainer from './LayoutContainer.js'

describe('<LayoutContainer>', () => {
    it('renders without errors', () => {
        shallow(<LayoutContainer />)
    })
})
