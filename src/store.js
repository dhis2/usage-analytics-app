import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import appStatus from './reducers/appStatus'
import usageData from './reducers/usageData'
import filter from './reducers/filter'

let middlewares = [ReduxThunk]

const shouldLog = false

if (process.env.NODE_ENV === 'development' && shouldLog) {
    middlewares.push(logger)
}

const rootReducer = combineReducers({
    appStatus,
    usageData,
    filter,
})

export default createStore(rootReducer, applyMiddleware(...middlewares))
