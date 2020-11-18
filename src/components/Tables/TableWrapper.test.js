import React from 'react'
import { shallow } from 'enzyme'
import TableWrapper from './TableWrapper.js'

describe('<TableWrapper>', () => {
    it('renders without errors', () => {
        shallow(<TableWrapper>Content</TableWrapper>)
    })
})
