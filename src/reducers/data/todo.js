import R from 'ramda'
import shortid from 'shortid'

import { TodoState } from '../../store/models/'
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, UPDATE_TODO, UPDATE_TODOS } from '../../constants/actionTypes'

export default (state = TodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return function () {
                const { input_text, category } = action.payload
                const todo = {
                    id: shortid.generate(),
                    isDone: false,
                    editable: false,
                    content: input_text,
                    category: category,
                    date: new Date()
                }

                return { ...state, ...{ todos: R.append(todo, state.todos) } }
            }()
        
        case TOGGLE_TODO:
            return function () {
                const { todos } = state
                const { id } = action.payload
                const update_todos = todos.map(todo => (todo.id === id) ? { ...todo, ...{ isDone: !todo.isDone } } : todo)
                return { ...state, ...{ todos: update_todos } }
            }()

        case EDIT_TODO:
            return function () {
                const { todos } = state
                const { id } = action.payload
                const update_todos = todos.map(todo => (todo.id === id) ? { ...todo, ...{ editable: !todo.editable } } : todo)
                return { ...state, ...{ todos: update_todos } }
            }()

        case UPDATE_TODO: 
            return function () {
                const { todos } = state
                const { id, input_text } = action.payload
                
                if (!input_text) return state
                
                const update_todos = todos.map(todo => (todo.id === id) ? { ...todo, ...{ content: input_text } } : todo)
                return { ...state, ...{ todos: update_todos } }
            }()
        
        case UPDATE_TODOS: 
            return function () {
                const { todos } = action.payload
                
                if (!todos) return state
                return {...state, ...{todos: todos}}
            }()
        default:
            return state
    }
}