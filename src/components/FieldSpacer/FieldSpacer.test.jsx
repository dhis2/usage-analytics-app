import { shallow } from 'enzyme'
import React from 'react'
import FieldSpacer from './FieldSpacer.jsx'

describe('<FieldSpacer>', () => {
    it('renders without errors', () => {
        shallow(<FieldSpacer>Field</FieldSpacer>)
    })
})
