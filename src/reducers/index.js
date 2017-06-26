import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './data/auth'
import todo from './data/todo'

export default combineReducers({
    AuthState: auth,
    TodoState: todo,
    router: routerReducer
})