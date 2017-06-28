import React, { Component } from 'react'

import TodoItem from './TodoItem'


class Todo extends Component {
    
    render() {
        const { todo } = this.props
        return (
            <TodoItem todos={todo.todos} />
        )
    }
}

export default Todo