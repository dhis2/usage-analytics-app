import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import appStatus from './reducers/appStatus'
import usageData from './reducers/usageData'
import filter from './reducers/filter'

const shouldLog = false

const initStore = ({ baseUrl }) => {
    const middlewares = [ReduxThunk.withExtraArgument({ baseUrl })]

    if (process.env.NODE_ENV === 'development' && shouldLog) {
        middlewares.push(logger)
    }

    const rootReducer = combineReducers({
        appStatus,
        usageData,
        filter,
    })

    return createStore(rootReducer, applyMiddleware(...middlewares))
}

export default initStore
