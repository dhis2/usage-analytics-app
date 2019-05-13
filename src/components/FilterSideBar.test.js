import React from 'react'
import { mount } from 'enzyme'
import store from '../store'
import { Provider } from 'react-redux'
import createSerializer from '../../test/serializer'
import { FilterSideBar, mapStateToProps } from './FilterSideBar'
import { FAVORITE_VIEWS, TOP_FAVORITES, USERS } from '../constants/categories'

expect.addSnapshotSerializer(createSerializer(2))

const defaultState = { filter: { category: FAVORITE_VIEWS } }

describe('<FilterSideBar/>', () => {
    it('Matches the snapshot for default category: FAVORITE_VIEWS', () => {
        const props = mapStateToProps(defaultState)
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const tree = mount(<FilterSideBar {...props} />, options)
        expect(tree).toMatchSnapshot()
    })

    it('Matches the snapshot for category: TOP_FAVORITES', () => {
        const state = { ...defaultState, filter: { category: TOP_FAVORITES } }
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const props = mapStateToProps(state)
        const tree = mount(<FilterSideBar {...props} />, options)
        expect(tree).toMatchSnapshot()
    })

    it('Matches the snapshot for any other category, i.e. USERS', () => {
        const state = { ...defaultState, filter: { category: USERS } }
        const options = {
            wrappingComponent: Provider,
            wrappingComponentProps: { store },
        }
        const props = mapStateToProps(state)
        const tree = mount(<FilterSideBar {...props} />, options)
        expect(tree).toMatchSnapshot()
    })
})
