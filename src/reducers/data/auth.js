import models from '../../store/models/'
import { UPDATE_GOOGLE_AUTH } from '../../constants/actionTypes'

export default function (state = models.auth, action) {
    switch (action.type) {
        case UPDATE_GOOGLE_AUTH: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}