import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

const mockFetch = jest.fn(async () => ({
    ok: true,
    json: async () => ({}),
}))

beforeEach(() => {
    jest.resetModules()
})

describe('<App/>', () => {
    it('renders without crashing', () => {
        window.fetch = mockFetch
        const div = document.createElement('div')

        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the expected tree', () => {
        jest.doMock('react-redux', () => ({
            connect: jest.fn(() => component => `Connected${component.name}`),
            Provider: () => <div />,
        }))
        const App = require('./App').default
        const tree = shallow(<App />)

        expect(tree).toMatchSnapshot()
    })
})
