import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

import '../../assets/Todo/Todo.css'


class Todo extends Component {
    
    render() {
        const { onAddItem, todo } = this.props
        return (
            <div className="todo-component">
                <TodoHeader onAddItem={onAddItem} category_list={todo.category_list} category_style={todo.category_style}/>
                <TodoItem todos={todo.todos} category_style={todo.category_style}/>
            </div>
        )
    }
}

export default Todo