import { END_DATE_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function endDate(state = initialState, { type, payload }) {
    switch (type) {
        case END_DATE_UPDATED:
            return payload
        default:
            return state
    }
}
