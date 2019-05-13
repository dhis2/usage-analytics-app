import React from 'react'
import { mount } from 'enzyme'
import createSerializer from '../../test/serializer'
import store from '../store'
import { Provider } from 'react-redux'
import { UsageAnalytics } from './UsageAnalytics'
import { LOADING, READY, ERROR } from '../constants/statuses'

expect.addSnapshotSerializer(createSerializer(3))

const defaultProps = {
    initApp: jest.fn(),
    appStatus: READY,
}

describe('<UsageAnalytics/>', () => {
    it('Matches the snapshot', () => {
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const tree = mount(<UsageAnalytics {...defaultProps} />, options)
        expect(tree).toMatchSnapshot()
    })
    it('Renders a <CircularProgress/> when appStatus equals LOADING', () => {
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const props = { ...defaultProps, appStatus: LOADING }
        const wrapper = mount(<UsageAnalytics {...props} />, options)
        expect(wrapper.find('CircularProgress').length).toEqual(1)
    })

    it('Renders an <Error/> when appStatus equals ERROR', () => {
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const props = { ...defaultProps, appStatus: ERROR }
        const wrapper = mount(<UsageAnalytics {...props} />, options)
        expect(wrapper.find('Error').length).toEqual(1)
    })
})
