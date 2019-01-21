import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as api from '../api'
import {
    initApp,
    updateCategory,
    updateFilterAndGetData,
    updateFilter,
    isNewDataRequiredAfterCategoryChange,
} from './index'
import * as TYPES from './types'
import {
    FAVORITE_VIEWS,
    FAVORITES_SAVED,
    TOP_FAVORITES,
} from '../constants/categories'

const mockStore = configureMockStore([thunk])
const defaultStoreState = {
    filter: {
        category: FAVORITE_VIEWS,
    },
    usageData: [],
}

const filterKey = 'pageSize'
const filterValue = 10
const filterUpdatedAction = {
    type: TYPES.FILTER_UPDATED,
    payload: { key: filterKey, value: filterValue },
}
const mockResponse = { data: 'test' }
const mockError = { message: 'Oops' }
const mockApiMethodThatWillResolve = () => Promise.resolve(mockResponse)
const mockApiMethodThatWillReject = () => Promise.reject(mockError)

describe('updateFilter', () => {
    it('should create an action to update the filter', () => {
        const expectedAction = filterUpdatedAction
        expect(updateFilter(filterKey, filterValue)).toEqual(expectedAction)
    })
})

describe('initApp', () => {
    it('creates APP_LOAD_SUCCESS when initApp resolves successfully', () => {
        // mock api method
        api.initApp = mockApiMethodThatWillResolve
        const expectedActions = [
            {
                type: TYPES.APP_LOAD_SUCCESS,
                payload: mockResponse,
            },
        ]
        const store = mockStore(defaultStoreState)
        return store.dispatch(initApp()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('creates APP_LOAD_ERROR when initApp is rejected', () => {
        // mock api method
        api.initApp = mockApiMethodThatWillReject
        const expectedActions = [
            { type: TYPES.APP_LOAD_ERROR, payload: mockError },
        ]
        const store = mockStore(defaultStoreState)
        return store.dispatch(initApp()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('updateCategory', () => {
    const CATEGORY = 'category'
    it('creates USAGE_DATA_RECEIVED when new data is required and getUsageData resolves successfully', () => {
        api.getUsageData = mockApiMethodThatWillResolve
        const expectedActions = [
            {
                type: TYPES.FILTER_UPDATED,
                payload: {
                    key: CATEGORY,
                    value: TOP_FAVORITES,
                },
            },
            {
                type: TYPES.USAGE_DATA_REQUESTED,
                payload: undefined,
            },
            {
                type: TYPES.USAGE_DATA_RECEIVED,
                payload: mockResponse,
            },
        ]
        const store = mockStore(defaultStoreState)
        return store
            .dispatch(updateCategory(CATEGORY, TOP_FAVORITES))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('creates USAGE_DATA_ERRORED when new data is required and getUsageData is rejected', () => {
        api.getUsageData = mockApiMethodThatWillReject
        const expectedActions = [
            {
                type: TYPES.FILTER_UPDATED,
                payload: {
                    key: CATEGORY,
                    value: TOP_FAVORITES,
                },
            },
            {
                type: TYPES.USAGE_DATA_REQUESTED,
                payload: undefined,
            },
            {
                type: TYPES.USAGE_DATA_ERRORED,
                payload: mockError,
            },
        ]
        const store = mockStore(defaultStoreState)
        return store
            .dispatch(updateCategory(CATEGORY, TOP_FAVORITES))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('creates FILTER_UPDATED when new data is NOT required', () => {
        const expectedActions = [
            {
                type: TYPES.FILTER_UPDATED,
                payload: {
                    key: CATEGORY,
                    value: FAVORITES_SAVED,
                },
            },
        ]

        const store = mockStore(defaultStoreState)
        store.dispatch(updateCategory(CATEGORY, FAVORITES_SAVED))
        expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('updateFilterAndGetData', () => {
    const baseActions = [
        filterUpdatedAction,
        {
            type: TYPES.USAGE_DATA_REQUESTED,
            payload: undefined,
        },
    ]

    it('creates USAGE_DATA_RECEIVED when updateFilterAndGetData resolves successfully', () => {
        // mock api method
        api.getUsageData = mockApiMethodThatWillResolve
        const expectedActions = [
            ...baseActions,
            {
                type: TYPES.USAGE_DATA_RECEIVED,
                payload: mockResponse,
            },
        ]
        const store = mockStore(defaultStoreState)
        return store
            .dispatch(updateFilterAndGetData(filterKey, filterValue))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('creates USAGE_DATA_ERRORED when updateFilterAndGetData is rejected', () => {
        // mock api method
        api.getUsageData = mockApiMethodThatWillReject
        const expectedActions = [
            ...baseActions,
            {
                type: TYPES.USAGE_DATA_ERRORED,
                payload: mockError,
            },
        ]
        const store = mockStore(defaultStoreState)
        return store
            .dispatch(updateFilterAndGetData(filterKey, filterValue))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})

describe('isNewDataRequiredAfterCategoryChange', () => {
    it('returns true when switching from another category to TOP_FAVORITES', () => {
        expect(
            isNewDataRequiredAfterCategoryChange(FAVORITE_VIEWS, TOP_FAVORITES)
        ).toEqual(true)
    })
    it('returns false when switching category and both are not TOP_FAVORITES', () => {
        expect(
            isNewDataRequiredAfterCategoryChange(
                FAVORITE_VIEWS,
                FAVORITES_SAVED
            )
        ).toEqual(false)
    })
    it('returns true when switching from TOP_FAVORITES to another', () => {
        expect(
            isNewDataRequiredAfterCategoryChange(TOP_FAVORITES, FAVORITES_SAVED)
        ).toEqual(true)
    })
})
