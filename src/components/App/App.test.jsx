import { shallow } from 'enzyme'
import React from 'react'
import App from './App.jsx'

describe('<App>', () => {
    it('renders without errors', () => {
        shallow(<App />)
    })
})
