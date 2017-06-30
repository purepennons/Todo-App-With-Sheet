import R from 'ramda'
import shortid from 'shortid'

import { TodoState } from '../../store/models/'
import { ADD_TODO } from '../../constants/actionTypes'

export default (state = TodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { input_text, category } = action.payload
            const todo = {
                id: shortid.generate(),
                isDone: false,
                content: input_text,
                category: category,
                date: new Date()
            }

            return { ...state, ...{todos: R.append(todo, state.todos)}}
        default:
            return state
    }
}