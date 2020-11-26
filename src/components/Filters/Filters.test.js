import React from 'react'
import { mount } from 'enzyme'
import {
    TOP_FAVORITES,
    DATA_VALUES,
    USERS,
    FAVORITES_SAVED,
    FAVORITE_VIEWS,
} from '../../constants/categories.js'
import {
    EventTypeField,
    PageSizeField,
    SortOrderField,
    DateRangeField,
    IntervalField,
    AggregationField,
    ChartTypeField,
} from '../FilterFields/index.js'
import Filters from './Filters.js'

const baseProps = {
    aggregation: '',
    chartType: '',
    endDate: '',
    eventType: '',
    interval: '',
    pageSize: '',
    setAggregation: () => {},
    setChartType: () => {},
    setEndDate: () => {},
    setEventType: () => {},
    setReportInterval: () => {},
    setPageSize: () => {},
    setSortOrder: () => {},
    setStartDate: () => {},
    sortOrder: '',
    startDate: '',
}

describe('<Filters>', () => {
    it('renders the required fields for TOP_FAVORITES', () => {
        const expectedFields = [EventTypeField, PageSizeField, SortOrderField]
        const props = {
            ...baseProps,
            category: TOP_FAVORITES,
        }
        const wrapper = mount(<Filters {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })
    })

    it('renders the required fields for FAVORITE_VIEWS', () => {
        const expectedFields = [
            DateRangeField,
            IntervalField,
            AggregationField,
            ChartTypeField,
        ]
        const props = {
            ...baseProps,
            category: FAVORITE_VIEWS,
        }
        const wrapper = mount(<Filters {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })
    })

    it('renders the required fields for DATA_VALUES', () => {
        const expectedFields = [DateRangeField, IntervalField]
        const props = {
            ...baseProps,
            category: DATA_VALUES,
        }
        const wrapper = mount(<Filters {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })
    })

    it('renders the required fields for USERS', () => {
        const expectedFields = [DateRangeField, IntervalField]
        const props = {
            ...baseProps,
            category: USERS,
        }
        const wrapper = mount(<Filters {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })
    })

    it('renders the required fields for FAVORITES_SAVED', () => {
        const expectedFields = [DateRangeField, IntervalField]
        const props = {
            ...baseProps,
            category: FAVORITES_SAVED,
        }
        const wrapper = mount(<Filters {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })
    })

    it('Shows a NoticeBox for unrecognized categories', () => {
        const props = {
            ...baseProps,
            category: 'Does not exist',
        }
        const wrapper = mount(<Filters {...props} />)
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
