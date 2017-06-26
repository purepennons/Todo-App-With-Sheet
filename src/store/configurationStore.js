import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers/'
import * as initialState from './models/'
import history from './history'

export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(
            createLogger(),
            reduxThunk,
            reduxPromiseMiddleware(),
            routerMiddleware(history)
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)