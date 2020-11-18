import React from 'react'
import { shallow } from 'enzyme'
import LayoutContent from './LayoutContent.js'

describe('<LayoutContent>', () => {
    it('renders without errors', () => {
        shallow(<LayoutContent />)
    })
})
