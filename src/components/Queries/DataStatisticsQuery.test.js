import React from 'react'
import { mount } from 'enzyme'
import { CustomDataProvider } from '@dhis2/app-runtime'
import waitForExpect from 'wait-for-expect'
import { YEAR } from '../../constants/intervals.js'
import DataStatisticsQuery from './DataStatisticsQuery.js'

describe('<DataStatisticsQuery>', () => {
    describe('rendering a spinner', () => {
        it('renders a spinner if it has not fetched yet', () => {
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

            expect(spy).not.toHaveBeenCalled()
            expect(wrapper.exists({ role: 'progressbar' })).toBe(true)

            wrapper.unmount()
        })

        it('renders a spinner if it is loading', async () => {
            const spy = jest.fn()
            const data = { dataStatistics: spy }
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

            await waitForExpect(() => {
                expect(spy).toHaveBeenCalled()
                expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
            })

            wrapper.unmount()
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

            await waitForExpect(() => {
                expect(spy).toHaveBeenCalled()
                expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
            })

            wrapper.unmount()
        })
    })

    describe('conditional fetching', () => {
        it('does not fetch if dates are invalid', () => {
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

            expect(spy).not.toHaveBeenCalled()

            wrapper.unmount()
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

            await waitForExpect(() => {
                wrapper.update()

                expect(spy).toHaveBeenCalledWith(false)
            })

            wrapper.unmount()
        })

        it('displays errors it encounters', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
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

            await waitForExpect(() => {
                wrapper.update()

                const title = wrapper.find(titleSelector)
                const message = wrapper.find(messageSelector)

                expect(title.text()).toBe('Error whilst fetching data')
                expect(message.text()).toBe('The error message was: "Error".')
            })

            wrapper.unmount()
        })

        it('renders a fallback message for errors', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
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

            await waitForExpect(() => {
                wrapper.update()

                const title = wrapper.find(titleSelector)
                const message = wrapper.find(messageSelector)

                expect(title.text()).toBe('Error whilst fetching data')
                expect(message.text()).toBe(
                    'There was no error message included with the error.'
                )
            })

            wrapper.unmount()
        })
    })

    describe('receiving data', () => {
        it('calls children with the received data', async () => {
            const expected = 'Expected data'
            const data = { dataStatistics: expected }
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

            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(expected)
            })

            wrapper.unmount()
        })

        it('calls setIsIntervalStale with false when data has been received', async () => {
            const expected = 'Expected data'
            const data = { dataStatistics: expected }
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

            await waitForExpect(() => {
                expect(children).toHaveBeenCalledWith(expected)
                expect(setIsIntervalStale).toHaveBeenCalledWith(false)
            })

            wrapper.unmount()
        })
    })
})
