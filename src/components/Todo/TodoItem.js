import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames/bind'

import style from '../../assets/Todo/TodoItem.css'

const cx = className.bind(style)

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const todos = this.props.todos
        const ul_class = {
            'todo-list': true,
            'todo-list-style': true,
        }
        const li_class = {
            'todo-item': true,
            'todo-item-style': true
        }

        return (
            <ul className={cx(ul_class)}>
                {
                    todos.map(todo => {
                        const { id, isDone, content, category, date } = todo
                        const label_class = {
                            'completeCheckbox-default': !isDone,
                            [`category-${category}`]: isDone,
                        }

                        return (
                            <li key={id} className={`category-${category} ` + cx(li_class)}>
                                <strong>{content}</strong>
                                <div className={`completeCheckbox completeCheckbox-style`}>
                                    <input type="checkbox" value={id} />
                                    <label htmlFor="completeCheckboxInput" className={cx(label_class)}></label>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
}

TodoItem.defaultProps = {
    todos: []
}

export default TodoItem