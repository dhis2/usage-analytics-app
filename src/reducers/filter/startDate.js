import { START_DATE_UPDATED } from '../../actions/types'

const initialState = 'test'

export default function startDate(state = initialState, { type, payload }) {
    switch (type) {
        case START_DATE_UPDATED:
            return payload
        default:
            return state
    }
}
