import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'


class Todo extends Component {
    
    render() {
        const { todo } = this.props
        return (
            <div>
                <TodoHeader category_list={todo.category_list} category_style={todo.category_style}/>
                <TodoItem todos={todo.todos} category_style={todo.category_style}/>
            </div>
        )
    }
}

export default Todo