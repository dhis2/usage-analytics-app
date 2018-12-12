import { combineReducers } from 'redux'
import startDate from './startDate'
import endDate from './endDate'
import interval from './interval'
import category from './category'
import favoriteViews from './favoriteViews'
import topFavorites from './topFavorites'

export default combineReducers({
    startDate,
    endDate,
    interval,
    category,
    favoriteViews,
    topFavorites,
})
