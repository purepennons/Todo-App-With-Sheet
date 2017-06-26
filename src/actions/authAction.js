import { UPDATE_GOOGLE_AUTH } from '../constants/actionTypes'

export const updateLoginStateAction = ({ isAuthorized }) => ({
    type: UPDATE_GOOGLE_AUTH,
    payload: { isAuthorized }
})