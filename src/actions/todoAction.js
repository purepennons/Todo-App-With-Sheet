import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, UPDATE_TODO } from '../constants/actionTypes'

export const addTodo = ({ input_text, category }) => ({
    type: ADD_TODO,
    payload: { input_text, category }
})

export const completeTodo = ({ id }) => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const editTodo = ({ id }) => ({
    type: EDIT_TODO,
    payload: { id }
})

export const updateTodo = ({ id, input_text }) => ({
    type: UPDATE_TODO,
    payload: { id, input_text }
})
