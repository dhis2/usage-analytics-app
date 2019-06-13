import React from 'react'
import { shallow } from 'enzyme'
import { UsageAnalytics } from './UsageAnalytics'
import { LOADING, READY, ERROR } from '../constants/statuses'

jest.mock('react-redux', () => ({
    connect: jest.fn(() => component => `Connected${component.name}`),
}))

const defaultProps = {
    initApp: jest.fn(),
    appStatus: READY,
}

describe('<UsageAnalytics/>', () => {
    it('Matches the snapshot', () => {
        const tree = shallow(<UsageAnalytics {...defaultProps} />)

        expect(tree).toMatchSnapshot()
    })
    it('Renders a <CircularLoader/> when appStatus equals LOADING', () => {
        const props = { ...defaultProps, appStatus: LOADING }
        const wrapper = shallow(<UsageAnalytics {...props} />)

        expect(wrapper.find('CircularLoader').length).toEqual(1)
    })

    it('Renders an <Error/> when appStatus equals ERROR', () => {
        const props = { ...defaultProps, appStatus: ERROR }
        const wrapper = shallow(<UsageAnalytics {...props} />)

        expect(wrapper.find('Error').length).toEqual(1)
    })
})
