import { ADD_TODO } from '../constants/actionTypes'

export const addTodo = ({ input_text, category }) => ({
    type: ADD_TODO,
    payload: { input_text, category }
})

