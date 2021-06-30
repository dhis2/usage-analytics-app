import { shallow } from 'enzyme'
import React from 'react'
import TableWrapper from './TableWrapper.js'

describe('<TableWrapper>', () => {
    it('renders without errors', () => {
        shallow(<TableWrapper>Content</TableWrapper>)
    })
})
