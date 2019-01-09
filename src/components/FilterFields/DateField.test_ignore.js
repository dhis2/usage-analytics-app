import React from 'react'
import { shallow } from 'enzyme'
import DateField from './DateField'

// Valid combination for startDate input
const defaultProps = {
    label: 'Test',
    name: 'test',
    onChange: jest.fn(),
    initialValue: '2018-9-30',
    startDate: undefined,
    endDate: '2018-12-30',
}

// Matches snapshot for valid startDate this.props
// Matches snapshot for valid endDate props
// Test onChange behavior: valid / invalid / when is props.onChange called
// Test state?
// Test shouldComponentUpdate?
// Test errors?

// describe('<Chart/>', () => {
//     it('Renders a <CircularProgress/> when usageData equals LOADING', () => {
//         const wrapper = getWrapperForState({ usageData: LOADING })
//         expect(wrapper.find('CircularProgress').length).toEqual(1)
//     })
//     it('Renders nothing when category equals TOP_FAVORITES', () => {
//         const wrapper = getWrapperForState({
//             filter: { category: CATS.TOP_FAVORITES },
//         })
//         expect(wrapper).toBeEmptyRender()
//     })
//     it('Produces a correct chart for category FAVORITE_VIEWS, aggregationLevel SUM, and chartType TOTAL', () => {
//         const wrapper = getWrapperForState({})
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category FAVORITE_VIEWS, aggregationLevel SUM, and chartType ALL', () => {
//         const wrapper = getWrapperForState({
//             filter: { chartType: CHARTS.ALL },
//         })
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category FAVORITE_VIEWS, aggregationLevel AVERAGE, and chartType TOTAL', () => {
//         const wrapper = getWrapperForState({
//             filter: { aggregationLevel: AGGRS.AVERAGE },
//         })
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category FAVORITE_VIEWS, aggregationLevel AVERAGE, and chartType ALL', () => {
//         const wrapper = getWrapperForState({
//             filter: { aggregationLevel: AGGRS.AVERAGE, chartType: CHARTS.ALL },
//         })
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category FAVORITES_SAVED', () => {
//         const wrapper = getWrapperForState({
//             filter: { category: CATS.FAVORITES_SAVED },
//         })
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category USERS', () => {
//         const wrapper = getWrapperForState({ filter: { category: CATS.USERS } })
//         expect(wrapper).toMatchSnapshot()
//     })
//     it('Produces a correct chart for category DATA_VALUES', () => {
//         const wrapper = getWrapperForState({
//             filter: { category: CATS.DATA_VALUES },
//         })
//         expect(wrapper).toMatchSnapshot()
//     })
// })
