import React from 'react'
import { shallow } from 'enzyme'
import FieldSpacer from './FieldSpacer.js'

describe('<FieldSpacer>', () => {
    it('renders without errors', () => {
        shallow(<FieldSpacer>Field</FieldSpacer>)
    })
})
