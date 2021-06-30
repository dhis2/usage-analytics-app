import { shallow } from 'enzyme'
import React from 'react'
import App from './App.js'

describe('<App>', () => {
    it('renders without errors', () => {
        shallow(<App />)
    })
})
