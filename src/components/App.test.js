import React from 'react'
import ReactDOM from 'react-dom'
import createSerializer from '../../test/serializer'
import { mount } from 'enzyme'
import App from './App'

expect.addSnapshotSerializer(createSerializer(2))

describe('<App/>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the expected tree', () => {
        const tree = mount(<App />)
        expect(tree).toMatchSnapshot()
    })
})
