import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { UsageAnalytics } from './UsageAnalytics'
import CircularProgress from 'ui/core/CircularProgress'
import Error from './Error'
import { LOADING, ERROR } from '../constants/statuses'

const baseProps = {
    initApp: () => {},
}

describe('<UsageAnalytics/>', () => {
    it('Matches the snapshot', () => {
        const tree = shallow(<UsageAnalytics {...baseProps} />)
        expect(tree).toMatchSnapshot()
    })
    it('Renders a <CircularProgress/> when appStatus equals LOADING', () => {
        const props = { ...baseProps, appStatus: LOADING }
        const wrapper = shallow(<UsageAnalytics {...props} />)
        expect(wrapper.find(CircularProgress).length).toEqual(1)
    })

    it('Renders a Error when appStatus equals ERR', () => {
        const props = { ...baseProps, appStatus: ERROR }
        const wrapper = shallow(<UsageAnalytics {...props} />)
        expect(wrapper.find(Error).length).toEqual(1)
    })
})
