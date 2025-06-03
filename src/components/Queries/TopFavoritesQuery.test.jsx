import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'
import TopFavoritesQuery from './TopFavoritesQuery.jsx'

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

describe('<TopFavoritesQuery>', () => {
    describe('rendering a spinner', () => {
        it('renders a spinner when loading', async () => {
            const props = {
                children: () => null,
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(
                <CustomDataProvider options={{ loadForever: true }}>
                    <TopFavoritesQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))

            expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
        })
    })

    describe('errors', () => {
        it.skip('displays errors it encounters', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-message',
            }
            const data = {
                'dataStatistics/favorites': () => {
                    throw new Error('Error')
                },
                systemSettings: () => {},
            }
            const props = {
                children: () => {},
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <TopFavoritesQuery {...props} />
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

        it.skip('renders a fallback message for errors', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-content-message',
            }
            const data = {
                'dataStatistics/favorites': () => {
                    throw new Error()
                },
                systemSettings: () => {},
            }
            const props = {
                children: () => {},
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <TopFavoritesQuery {...props} />
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
        it('calls children with the expected data when count passive views is false', async () => {
            const expected = [{ id: 1, views: 10 }]
            const data = {
                'dataStatistics/favorites': (_, query) => {
                    if (query.params.eventType === 'PASSIVE_DASHBOARD_VIEW') {
                        return [{ id: 2, views: 0 }]
                    }

                    return expected
                },
                systemSettings: () => ({
                    keyCountPassiveDashboardViewsInUsageAnalytics: false,
                }),
            }
            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <TopFavoritesQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(expected)
            })
        })

        it('calls children with the expected data when count passive views is true and the event type is DASHBOARD_VIEW', async () => {
            const expected = [
                {
                    id: 'id',
                    views: 25,
                },
            ]
            const data = {
                'dataStatistics/favorites': (_, query) => {
                    if (query.params.eventType === 'PASSIVE_DASHBOARD_VIEW') {
                        return [
                            {
                                id: 'id',
                                views: 15,
                            },
                        ]
                    }

                    return [
                        {
                            id: 'id',
                            views: 10,
                        },
                    ]
                },
                systemSettings: () => ({
                    keyCountPassiveDashboardViewsInUsageAnalytics: true,
                }),
            }
            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                fields: ['*'],
                eventType: 'DASHBOARD_VIEW',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(
                <CustomDataProvider data={data}>
                    <TopFavoritesQuery {...props} />
                </CustomDataProvider>
            )

            await act(update(wrapper))
            await waitForExpect(() => {
                expect(spy).toHaveBeenCalledWith(expected)
            })
        })
    })
})
