import React from 'react'
import { shallow } from 'enzyme'
import {
    FAVORITE_VIEWS,
    TOP_FAVORITES,
    FAVORITES_SAVED,
} from '../../constants/categories.js'
import FilterFields from './FilterFields.js'
import AggregationField from './AggregationField.js'
import ChartTypeField from './ChartTypeField.js'
import DateRangeField from './DateRangeField.js'
import EventTypeField from './EventTypeField.js'
import IntervalField from './IntervalField.js'
import PageSizeField from './PageSizeField.js'
import SortOrderField from './SortOrderField.js'

describe('<FilterFields>', () => {
    it('renders the expected fields for FAVORITE_VIEWS', () => {
        const expectedFields = [
            DateRangeField,
            IntervalField,
            AggregationField,
            ChartTypeField,
        ]
        const props = {
            aggregation: '',
            category: FAVORITE_VIEWS,
            chartType: '',
            endDate: '',
            eventType: '',
            interval: '',
            pageSize: '',
            setAggregation: () => {},
            setChartType: () => {},
            setEndDate: () => {},
            setEventType: () => {},
            setInterval: () => {},
            setIsDateValid: () => {},
            setPageSize: () => {},
            setSortOrder: () => {},
            setStartDate: () => {},
            sortOrder: '',
            startDate: '',
        }
        const wrapper = shallow(<FilterFields {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })

        // Ensure that there are no more than the required fields
        expect(wrapper.children()).toHaveLength(expectedFields.length)
    })

    it('renders the expected fields for TOP_FAVORITES', () => {
        const expectedFields = [EventTypeField, PageSizeField, SortOrderField]
        const props = {
            aggregation: '',
            category: TOP_FAVORITES,
            chartType: '',
            endDate: '',
            eventType: '',
            interval: '',
            pageSize: '',
            setAggregation: () => {},
            setChartType: () => {},
            setEndDate: () => {},
            setEventType: () => {},
            setInterval: () => {},
            setIsDateValid: () => {},
            setPageSize: () => {},
            setSortOrder: () => {},
            setStartDate: () => {},
            sortOrder: '',
            startDate: '',
        }
        const wrapper = shallow(<FilterFields {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })

        // Ensure that there are no more than the required fields
        expect(wrapper.children()).toHaveLength(expectedFields.length)
    })

    it('renders the expected fields for categories that are not TOP_FAVORITES or FAVORITE_VIEWS', () => {
        const expectedFields = [DateRangeField, IntervalField]
        const props = {
            aggregation: '',
            category: FAVORITES_SAVED,
            chartType: '',
            endDate: '',
            eventType: '',
            interval: '',
            pageSize: '',
            setAggregation: () => {},
            setChartType: () => {},
            setEndDate: () => {},
            setEventType: () => {},
            setInterval: () => {},
            setIsDateValid: () => {},
            setPageSize: () => {},
            setSortOrder: () => {},
            setStartDate: () => {},
            sortOrder: '',
            startDate: '',
        }
        const wrapper = shallow(<FilterFields {...props} />)

        expectedFields.forEach(field => {
            expect(wrapper.exists(field)).toBe(true)
        })

        // Ensure that there are no more than the required fields
        expect(wrapper.children()).toHaveLength(expectedFields.length)
    })
})
