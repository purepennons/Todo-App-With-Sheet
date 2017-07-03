import { connect } from 'react-redux'
import Todo from '../components/Todo/'

import { addTodo, completeTodo, editTodo, updateTodo } from '../actions/'
import {  } from '../handlers/todo'

export default connect(
    state => ({ todo: state.TodoState }),
    dispatch => ({
        // TodoHeader
        onAddItem: ({ input_text, category }) => e => {
            e.preventDefault()
            dispatch(addTodo({ input_text, category }))
        },

        onComplete: ({ id }) => e => {
            e.preventDefault()
            dispatch(completeTodo({ id }))
        },

        onEdit: ({ id }) => e => {
            e.preventDefault()
            e.stopPropagation()
            dispatch(editTodo({ id }))
        },

        onUpdateTodo: ({ id, input_text }) => e => {
            e.preventDefault()
            e.stopPropagation()
            dispatch(editTodo({ id }))
            dispatch(updateTodo({ id, input_text }))
        }
    })
)(Todo)