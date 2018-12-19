import * as api from '../api'
import * as ACTIONS from '../actions/types'
import { TOP_FAVORITES } from '../constants/categories'

export const initApp = () => async (dispatch, getState) => {
    try {
        const payload = await api.initApp(getState())
        dispatch(createAction(ACTIONS.APP_LOAD_SUCCESS, payload))
    } catch (error) {
        console.error(error)
        dispatch(createAction(ACTIONS.APP_LOAD_ERROR, error))
    }
}

// Fetch data if category has changed from TOP_FAVORITES to anything else
// or vice versa
export const updateCategory = (key, newCategory) => (dispatch, getState) => {
    const { filter } = getState()
    const oldCategory = filter.category

    dispatch(updateFilter(key, newCategory))

    if (
        oldCategory !== newCategory &&
        ((newCategory === TOP_FAVORITES && oldCategory !== TOP_FAVORITES) ||
            (oldCategory === TOP_FAVORITES && newCategory !== TOP_FAVORITES))
    ) {
        getUsageData({ ...filter, category: newCategory }, dispatch)
    }
}

export const updateFilterAndGetData = (key, value) => (dispatch, getState) => {
    dispatch(updateFilter(key, value))

    const { filter } = getState()
    getUsageData(filter, dispatch)
}

export const updateFilter = (key, value) =>
    createAction(ACTIONS.FILTER_UPDATED, { key, value })

async function getUsageData(filter, dispatch) {
    dispatch(createAction(ACTIONS.USAGE_DATA_REQUESTED))

    try {
        const usageData = await api.getUsageData(filter)
        dispatch(createAction(ACTIONS.USAGE_DATA_RECEIVED, usageData))
    } catch (error) {
        console.error(error)
        dispatch(createAction(ACTIONS.USAGE_DATA_ERRORED))
    }
}

function createAction(type, payload) {
    return { type, payload }
}
