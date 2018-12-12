import { CATEGORY_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function category(state = initialState, { type, payload }) {
    switch (type) {
        case CATEGORY_UPDATED:
            return payload
        default:
            return state
    }
}
