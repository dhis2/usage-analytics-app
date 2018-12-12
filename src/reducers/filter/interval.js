import { INTERVAL_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function interval(state = initialState, { type, payload }) {
    switch (type) {
        case INTERVAL_UPDATED:
            return payload
        default:
            return state
    }
}
