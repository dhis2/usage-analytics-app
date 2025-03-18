import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'
import { YEAR } from '../../constants/intervals.js'
import DataStatisticsQuery from './DataStatisticsQuery.jsx'

/**
 * This allows react to update the wrapper after the async app runtime logic has
 * done its thing and updated state.
 *
 * - https://dev.to/dannypule/fix-the-not-wrapped-in-act-warning-simple-solution-3lj1
 * - https://reactjs.org/docs/testing-recipes.html#act
 */

const update = (wrapper) => () =>
    new Promise((resolve) => {
        setTimeout(() => {
            wrapper.update()
            resolve()
        }, 0)
    })

describe('<DataStatisticsQuery>', () => {
    describe('rendering a spinner', () => {
        it('renders a spinner initially', async () => {
            const spy = jest.fn()
            const data = { dataStatistics: spy }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2030-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).not.toHaveBeenCalled()
                expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
            })
        })

        it('renders a spinner if the interval is stale', async () => {
            const spy = jest.fn()
            const data = { dataStatistics: spy }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: true,
                setIsIntervalStale: () => {},
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalled()
                expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
            })
        })
    })

    describe('conditional fetching', () => {
        it('does not fetch if dates are invalid', async () => {
            const spy = jest.fn()
            const data = { dataStatistics: spy }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2030-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).not.toHaveBeenCalled()
            })
        })
    })

    describe('errors', () => {
        it('calls setIsIntervalStale with false on errors', async () => {
            const spy = jest.fn()
            const data = {
                dataStatistics: () => {
                    throw new Error('Error')
                },
            }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: spy,
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(false)
            })
        })

        it('displays errors it encounters', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-message',
            }
            const data = {
                dataStatistics: () => {
                    throw new Error('Error')
                },
            }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                const title = wrapper.find(titleSelector)
                const message = wrapper.find(messageSelector)

                expect(title.text()).toBe('Error whilst fetching data')
                expect(message.text()).toBe('The error message was: "Error".')
            })
        })

        it('renders a fallback message for errors', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-message',
            }
            const data = {
                dataStatistics: () => {
                    throw new Error()
                },
            }
            const props = {
                children: () => {},
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                const title = wrapper.find(titleSelector)
                const message = wrapper.find(messageSelector)

                expect(title.text()).toBe('Error whilst fetching data')
                expect(message.text()).toBe(
                    'There was no error message included with the error.'
                )
            })
        })
    })

    describe('receiving data', () => {
        it('calls children with the received data when count passive views is false', async () => {
            const expected = 'Expected data'
            const data = {
                dataStatistics: expected,
                systemSettings: {
                    keyCountPassiveDashboardViewsInUsageAnalytics: false,
                },
            }
            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(expected)
            })
        })

        it('calls children with the received data when count passive views is true', async () => {
            const expected = [
                {
                    dashboardViews: 1000,
                    passiveDashboardViews: 900,
                    averageDashboardViews: 100,
                    users: 10,
                },
            ]
            const data = {
                dataStatistics: [
                    {
                        dashboardViews: 100,
                        passiveDashboardViews: 900,
                        averageDashboardViews: 10,
                        users: 10,
                    },
                ],
                systemSettings: {
                    keyCountPassiveDashboardViewsInUsageAnalytics: true,
                },
            }
            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale: () => {},
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(expected)
            })
        })

        it('calls setIsIntervalStale with false when data has been received', async () => {
            const expected = 'Expected data'
            const data = {
                dataStatistics: expected,
                systemSettings: {
                    keyCountPassiveDashboardViewsInUsageAnalytics: false,
                },
            }
            const children = jest.fn(() => null)
            const setIsIntervalStale = jest.fn()
            const props = {
                children,
                endDate: '2020-01-01',
                fields: ['*'],
                interval: YEAR,
                isIntervalStale: false,
                setIsIntervalStale,
                startDate: '2010-01-01',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <DataStatisticsQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(children).toHaveBeenCalledWith(expected)
                expect(setIsIntervalStale).toHaveBeenCalledWith(false)
            })
        })
    })
})
