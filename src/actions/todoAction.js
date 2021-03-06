import co from 'co'

import { ADD_TODO, ADD_TODO_ACTION, TOGGLE_TODO, EDIT_TODO, UPDATE_TODO, UPDATE_TODOS } from '../constants/actionTypes'
import { moveTodoHandler, addTodoToSheetHandler } from '../handlers/todo'

export const addTodo = ({ input_text, category }) => dispatch => dispatch({
    type: ADD_TODO,
    payload: co(addTodoToSheetHandler({ input_text, category }))
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

export const updateTodos = ({ todos }) => ({
    type: UPDATE_TODOS,
    payload: { todos }
})

export const moveTodo = (dragAndDropData) => (dispatch, getState) => {
    const state = getState()
    const { TodoState } = state
    const update_todos = moveTodoHandler(dragAndDropData, TodoState.todos)
    dispatch(updateTodos({ todos: update_todos }))
}
