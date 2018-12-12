import { FAVORITE_VIEWS_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function favoriteViews(state = initialState, { type, payload }) {
    switch (type) {
        case FAVORITE_VIEWS_UPDATED:
            return payload
        default:
            return state
    }
}
