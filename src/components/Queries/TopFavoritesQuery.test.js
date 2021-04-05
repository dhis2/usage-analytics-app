import React from 'react'
import { mount } from 'enzyme'
import { useDataQuery } from '@dhis2/app-runtime'
import TopFavoritesQuery from './TopFavoritesQuery.js'
import { DASHBOARD_VIEW } from '../../constants/eventTypes.js'

/**
 * We're mocking the app-runtime here instead of using the CustomDataProvider, since
 * the CustomDataProvider doesn't work for queries that call the same endpoint more
 * than once.
 */

jest.mock('@dhis2/app-runtime', () => ({
    useDataQuery: jest.fn(),
}))

describe('<TopFavoritesQuery>', () => {
    describe('rendering a spinner', () => {
        it('renders a spinner when loading', async () => {
            useDataQuery.mockImplementation(() => ({
                loading: true,
                called: true,
                refetch: () => {},
            }))

            const props = {
                children: () => null,
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(<TopFavoritesQuery {...props} />)

            expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
        })
    })

    describe('errors', () => {
        it('displays errors it encounters', async () => {
            useDataQuery.mockImplementation(() => ({
                loading: false,
                called: true,
                error: new Error('Error'),
                refetch: () => {},
            }))

            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
            }
            const props = {
                children: () => {},
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(<TopFavoritesQuery {...props} />)

            const title = wrapper.find(titleSelector)
            const message = wrapper.find(messageSelector)

            expect(title.text()).toBe('Error whilst fetching data')
            expect(message.text()).toBe('The error message was: "Error".')
        })

        it('renders a fallback message for errors', async () => {
            useDataQuery.mockImplementation(() => ({
                loading: false,
                called: true,
                error: new Error(),
                refetch: () => {},
            }))

            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
            }
            const props = {
                children: () => {},
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            const wrapper = mount(<TopFavoritesQuery {...props} />)

            const title = wrapper.find(titleSelector)
            const message = wrapper.find(messageSelector)

            expect(title.text()).toBe('Error whilst fetching data')
            expect(message.text()).toBe(
                'There was no error message included with the error.'
            )
        })
    })

    describe('receiving data', () => {
        it('calls children with the expected data when count passive views is false', async () => {
            const expected = 'Expected data'

            useDataQuery.mockImplementation(() => ({
                loading: false,
                called: true,
                error: undefined,
                refetch: () => {},
                data: {
                    favorites: expected,
                    passiveFavorites: [],
                    systemSettings: {
                        keyCountPassiveDashboardViewsInUsageAnalytics: false,
                    },
                },
            }))

            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                fields: ['*'],
                eventType: '',
                pageSize: '',
                sortOrder: '',
            }

            mount(<TopFavoritesQuery {...props} />)

            expect(spy).toHaveBeenCalledWith(expected)
        })

        it('calls children with the expected data when count passive views is true and the event type is DASHBOARD_VIEW', async () => {
            const expected = [
                {
                    id: 'id',
                    views: 20,
                },
            ]

            useDataQuery.mockImplementation(() => ({
                loading: false,
                called: true,
                error: undefined,
                refetch: () => {},
                data: {
                    favorites: [
                        {
                            id: 'id',
                            views: 10,
                        },
                    ],
                    passiveFavorites: [
                        {
                            id: 'id',
                            views: 10,
                        },
                    ],
                    systemSettings: {
                        keyCountPassiveDashboardViewsInUsageAnalytics: true,
                    },
                },
            }))

            const spy = jest.fn(() => null)
            const props = {
                children: spy,
                fields: ['*'],
                eventType: DASHBOARD_VIEW,
                pageSize: '',
                sortOrder: '',
            }

            mount(<TopFavoritesQuery {...props} />)

            expect(spy).toHaveBeenCalledWith(expected)
        })
    })
})
