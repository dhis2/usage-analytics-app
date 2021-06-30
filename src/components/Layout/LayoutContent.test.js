import { shallow } from 'enzyme'
import React from 'react'
import LayoutContent from './LayoutContent.js'

describe('<LayoutContent>', () => {
    it('renders without errors', () => {
        shallow(<LayoutContent />)
    })
})
