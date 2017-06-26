import { LOGIN_GOOGLE, LOGOUT_GOOGLE, UPDATE_GOOGLE_AUTH } from '../constants/actionTypes'

export const updateLoginStateAction = ({ isAuthorized }) => ({
    type: UPDATE_GOOGLE_AUTH,
    payload: { isAuthorized }
})

export const loginAction = dispatch => {}