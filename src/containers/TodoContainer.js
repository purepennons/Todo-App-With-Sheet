import { connect } from 'react-redux'
import Todo from '../components/Todo/'

import { addTodo } from '../actions/'
import {  } from '../handlers/todo'

export default connect(
    state => ({ todo: state.TodoState }),
    dispatch => ({
        // TodoHeader
        onAddItem: ({ input_text, category }) => e => {
            e.preventDefault()
            dispatch(addTodo({ input_text, category }))
        }
    })
)(Todo)