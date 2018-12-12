import { LOADING, ERROR } from '../constants/statuses'
import {
    STATISTICS_REQUESTED,
    STATISTICS_RECEIVED,
    STATISTICS_ERRORED,
} from '../actions/types'

export default function statistics(state = LOADING, { type, payload }) {
    switch (type) {
        case STATISTICS_REQUESTED:
            return LOADING
        case STATISTICS_RECEIVED:
            return payload
        case STATISTICS_ERRORED:
            return ERROR
        default:
            return state
    }
}
