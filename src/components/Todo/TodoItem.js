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
        const { todos, category_style } = this.props

        return (
            <ul className={`todo-list todo-list-style`}>
                {
                    todos.map(todo => {
                        const { id, isDone, content, category, date } = todo
                        const category_color = category_style[category]['color']
                        const label_class = {
                            'completeCheckbox-default': !isDone,
                            [`category-${category_color}`]: isDone,
                        }
                        
                        return (
                            <li key={id} className={`category-${category_color} todo-item todo-item-style`}>
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
    todos: PropTypes.array.isRequired,
    category_style: PropTypes.object.isRequired
}

TodoItem.defaultProps = {
    todos: [],
    category_style: {
        normal: {
            id: 'normal',
            color: 'default'
        }
    }
}

export default TodoItem