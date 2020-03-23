import * as api from '../api'
import * as ACTIONS from '../actions/types'
import { TOP_FAVORITES } from '../constants/categories'

export const initApp = () => async (dispatch, getState, context) => {
    try {
        const payload = await api.getUsageData(getState().filter, context)
        dispatch(createAction(ACTIONS.APP_LOAD_SUCCESS, payload))
    } catch (error) {
        dispatch(createAction(ACTIONS.APP_LOAD_ERROR, error))
    }
}

// Fetch data if category has changed from TOP_FAVORITES to anything else
// or vice versa
export const updateCategory = value => (dispatch, getState) => {
    const { filter } = getState()
    const oldCategory = filter.category

    dispatch(updateFilter('category', value))

    if (isNewDataRequiredAfterCategoryChange(oldCategory, value)) {
        return getUsageData({ ...filter, category: value }, dispatch)
    }
}

export const updateFilterAndGetData = (name, value) => (dispatch, getState) => {
    dispatch(updateFilter(name, value))

    const { filter } = getState()
    return getUsageData(filter, dispatch)
}

export const updateUsageData = () => (dispatch, getState) => {
    const { filter } = getState()
    return getUsageData(filter, dispatch)
}

export const updateFilter = (key, value) =>
    createAction(ACTIONS.FILTER_UPDATED, { key, value })

export function isNewDataRequiredAfterCategoryChange(oldCategory, newCategory) {
    return (
        oldCategory !== newCategory &&
        ((newCategory === TOP_FAVORITES && oldCategory !== TOP_FAVORITES) ||
            (oldCategory === TOP_FAVORITES && newCategory !== TOP_FAVORITES))
    )
}

const getUsageData = filter => async (dispatch, getState, context) => {
    dispatch(createAction(ACTIONS.USAGE_DATA_REQUESTED))

    try {
        const usageData = await api.getUsageData(filter, context)
        dispatch(createAction(ACTIONS.USAGE_DATA_RECEIVED, usageData))
    } catch (error) {
        dispatch(createAction(ACTIONS.USAGE_DATA_ERRORED, error))
    }
}

function createAction(type, payload) {
    return { type, payload }
}
