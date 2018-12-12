import * as api from '../api'

export const initApp = () => async dispatch => {
    try {
        const data = await api.initApp()
    } catch (error) {}
}
