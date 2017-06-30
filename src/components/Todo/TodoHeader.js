import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames/bind'

import style from '../../assets/Todo/TodoHeader.css'

const cx = className.bind(style)

class TodoHeader extends Component {
    constructor(props) {
        super(props)

        const { category_list } = props
        this.state = {
            selected_category: category_list[0],
            todoText: ''
        }
    }

    onSubmit(e) {
        const { onAddItem } = this.props
        onAddItem({ input_text: this.state.todoText, category: this.state.selected_category })(e)
        this.setState({ todoText: '' })
    }

    onEnter(e) {
        e.stopPropagation()
        if (e.keyCode !== 13) return
        this.onSubmit(e)
    }

    render() {
        const { category_list, category_style } = this.props
        const category_color = category_style[this.state.selected_category]['color']
        const select_class = {
            [`category-${category_color}`]: true
        }

        return (
            <div onKeyDown={e => this.onEnter(e)} className={`todo-header todo-header-style`}>
                <div className="todo-header-select">
                    <label htmlFor="category">Category:</label>
                    <select value={this.state.selected_category} onChange={e => this.setState({selected_category: e.target.value})} className={`${cx(select_class)}`} name="category" >
                        {category_list.map((category, key) => <option key={key} value={category}>{category}</option>)}
                    </select>
                </div>    
                <input type="text" value={this.state.todoText} onChange={e => this.setState({todoText: e.target.value})} placeholder="add a todo item..." />
                <button onClick={e => this.onSubmit(e)}>ADD</button>
            </div>
        ) 
    }
}

TodoHeader.propTypes = {
    category_list: PropTypes.array.isRequired,
    category_style: PropTypes.object.isRequired
}

TodoHeader.defaultProps = {
    category_list: ['normal'],
    category_style: {
        normal: {
            id: 'normal',
            color: 'default'
        }
    }
}

export default TodoHeader