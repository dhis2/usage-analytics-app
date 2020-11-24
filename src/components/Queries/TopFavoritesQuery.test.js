import React from 'react'
import { mount } from 'enzyme'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { act } from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'
import TopFavoritesQuery from './TopFavoritesQuery.js'

/**
 * This allows react to update the wrapper after the async app runtime logic has
 * done its thing and updated state.
 *
 * - https://dev.to/dannypule/fix-the-not-wrapped-in-act-warning-simple-solution-3lj1
 * - https://reactjs.org/docs/testing-recipes.html#act
 */

const update = wrapper => () =>
    new Promise(resolve => {
        setImmediate(() => {
            wrapper.update()
            resolve()
        })
    })

describe('<TopFavoritesQuery>', () => {
    describe('rendering a spinner', () => {
        it('renders a spinner initially', async () => {
            const data = { 'dataStatistics/favorites': 'data' }
            const props = {
                children: () => null,
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

            expect(wrapper.exists({ role: 'progressbar' })).toBe(true)
        })
    })

    describe('errors', () => {
        it('displays errors it encounters', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
            }
            const data = {
                'dataStatistics/favorites': () => {
                    throw new Error('Error')
                },
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

        it('renders a fallback message for errors', async () => {
            const titleSelector = {
                'data-test': 'dhis2-uicore-noticebox-title',
            }
            const messageSelector = {
                'data-test': 'dhis2-uicore-noticebox-message',
            }
            const data = {
                'dataStatistics/favorites': () => {
                    throw new Error()
                },
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
        it('calls children with the received data', async () => {
            const expected = 'Expected data'
            const data = { 'dataStatistics/favorites': expected }
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
    })
})
