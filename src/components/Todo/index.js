import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

import '../../assets/Todo/Todo.css'


class Todo extends Component {
    
    render() {
        const { todo } = this.props
        return (
            <div className="todo-component">
                <TodoHeader {...this.props} {...todo}/>
                <TodoItem {...this.props} {...todo}/>
            </div>
        )
    }
}

export default Todo