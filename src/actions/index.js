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
export const updateCategory = (_, newCategory) => (dispatch, getState) => {
    const { filter } = getState()
    const oldCategory = filter.category

    dispatch(createAction(ACTIONS.CATEGORY_UPDATED, newCategory))

    if (
        oldCategory !== newCategory &&
        ((newCategory === TOP_FAVORITES && oldCategory !== TOP_FAVORITES) ||
            (oldCategory === TOP_FAVORITES && newCategory !== TOP_FAVORITES))
    ) {
        getUsageData({ ...filter, category: newCategory }, dispatch)
    }
}

export const updateStartDate = value => (dispatch, getState) =>
    update(ACTIONS.START_DATE_UPDATED, value, dispatch, getState)

export const updateEndDate = value => (dispatch, getState) =>
    update(ACTIONS.END_DATE_UPDATED, value, dispatch, getState)

export const updateInterval = (_, value) => (dispatch, getState) =>
    update(ACTIONS.INTERVAL_UPDATED, value, dispatch, getState)

export const updateAggregationLevel = (_, value) =>
    createAction(ACTIONS.AGGREGATION_LEVEL_UPDATED, value)

export const updateChartType = (_, value) =>
    createAction(ACTIONS.CHART_TYPE_UPDATED, value)

export const updateEventType = (_, value) => (dispatch, getState) =>
    update(ACTIONS.EVENT_TYPE_UPDATED, value, dispatch, getState)

export const updatePageSize = (_, value) => (dispatch, getState) =>
    update(ACTIONS.PAGE_SIZE_UPDATED, value, dispatch, getState)

export const updateSortOrder = (_, value) => (dispatch, getState) =>
    update(ACTIONS.SORT_ORDER_UPDATED, value, dispatch, getState)

function update(actionName, value, dispatch, getState) {
    dispatch(createAction(actionName, value))

    const { filter } = getState()
    getUsageData(filter, dispatch)
}

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
