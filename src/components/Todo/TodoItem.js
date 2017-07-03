import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames/bind'

import style from '../../assets/Todo/TodoItem.css'

const cx = className.bind(style)

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.contentRefs = {
            // key = id, value = ref of content
        }
    }

    onUpdate(e, { id }) {
        if (!this.contentRefs[id]) return
        
        const { onUpdateTodo } = this.props
        onUpdateTodo({id, input_text: this.contentRefs[id].textContent})(e)
    }

    onEnter(e, { id }) {
        e.stopPropagation()
        // do not e.preventDefault(), it will cause that text never be changed
        // e.preventDefault()
        if (e.keyCode !== 13) return
        this.onUpdate(e, { id })
    }

    render() {
        const { todos, category_style, onComplete, onEdit } = this.props

        return (
            <ul className={`todo-list todo-list-style`}>
                {
                    todos.map(todo => {
                        const { id, isDone, editable, content, category, date } = todo
                        const category_color = category_style[category]['color']
                        const label_class = {
                            'completeCheckbox-default': !isDone,
                            [`category-${category_color}`]: isDone,
                        }

                        const strong_class = {
                            'todo-item-edit-style': editable
                        }
                        
                        return (
                            <li key={id} onKeyDown={e => this.onEnter(e, { id })} className={`category-${category_color} todo-item todo-item-style`} title={date.toISOString()}>
                                <strong ref={ref => this.contentRefs[id] = ref} onDoubleClick={onEdit({ id })} className={cx(strong_class)} contentEditable={editable}>{content}</strong>
                                <button onClick={e => this.onUpdate(e, { id })} className={`todo-item-edit-btn`} style={(editable) ? {}: { display: 'none'}}>Done</button>
                                <div onClick={onComplete({ id })} className={`completeCheckbox completeCheckbox-style`}>
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