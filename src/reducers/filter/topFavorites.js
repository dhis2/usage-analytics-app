import { TOP_FAVORITES_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function topFavorites(state = initialState, { type, payload }) {
    switch (type) {
        case TOP_FAVORITES_UPDATED:
            return payload
        default:
            return state
    }
}
