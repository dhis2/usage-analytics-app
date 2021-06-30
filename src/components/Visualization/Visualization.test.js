import { shallow, mount } from 'enzyme'
import React from 'react'
import {
    TOP_FAVORITES,
    DATA_VALUES,
    USERS,
    FAVORITES_SAVED,
    FAVORITE_VIEWS,
} from '../../constants/categories.js'
import DataValuesVisualization from './DataValuesVisualization.js'
import FavoritesSavedVisualization from './FavoritesSavedVisualization.js'
import FavoriteViewsVisualization from './FavoriteViewsVisualization.js'
import TopFavoritesVisualization from './TopFavoritesVisualization.js'
import UsersVisualization from './UsersVisualization.js'
import Visualization from './Visualization.js'

const baseProps = {
    aggregation: '',
    chartType: '',
    endDate: '',
    eventType: '',
    interval: '',
    isIntervalStale: false,
    pageSize: '',
    setIsIntervalStale: () => {},
    sortOrder: '',
    startDate: '',
}

describe('<Visualization>', () => {
    it('renders the expected component for TOP_FAVORITES', () => {
        const props = {
            ...baseProps,
            category: TOP_FAVORITES,
        }
        const wrapper = shallow(<Visualization {...props} />)

        expect(wrapper.exists(TopFavoritesVisualization)).toBe(true)
    })

    it('renders the expected component for DATA_VALUES', () => {
        const props = {
            ...baseProps,
            category: DATA_VALUES,
        }
        const wrapper = shallow(<Visualization {...props} />)

        expect(wrapper.exists(DataValuesVisualization)).toBe(true)
    })

    it('renders the expected component for USERS', () => {
        const props = {
            ...baseProps,
            category: USERS,
        }
        const wrapper = shallow(<Visualization {...props} />)

        expect(wrapper.exists(UsersVisualization)).toBe(true)
    })

    it('renders the expected component for FAVORITES_SAVED', () => {
        const props = {
            ...baseProps,
            category: FAVORITES_SAVED,
        }
        const wrapper = shallow(<Visualization {...props} />)

        expect(wrapper.exists(FavoritesSavedVisualization)).toBe(true)
    })

    it('renders the expected component for FAVORITE_VIEWS', () => {
        const props = {
            ...baseProps,
            category: FAVORITE_VIEWS,
        }
        const wrapper = shallow(<Visualization {...props} />)

        expect(wrapper.exists(FavoriteViewsVisualization)).toBe(true)
    })

    it('Shows a NoticeBox for unrecognized categories', () => {
        const props = {
            ...baseProps,
            category: 'Does not exist',
        }
        const wrapper = mount(<Visualization {...props} />)
        const title = wrapper.find({
            'data-test': 'dhis2-uicore-noticebox-title',
        })
        const message = wrapper.find({
            'data-test': 'dhis2-uicore-noticebox-message',
        })

        expect(title.text()).toMatchInlineSnapshot(`"Unrecognized category"`)
        expect(message.text()).toMatchInlineSnapshot(
            `"The chosen category was not recognized."`
        )
    })
})
