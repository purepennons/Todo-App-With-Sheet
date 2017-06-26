import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { todo } = this.props
        const { id, isDone, content, category, date } = todo
        return (
            <li key={id}>
                {content}
                <input type="checkbox" value={id}/>
            </li>
        )
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string,
    date: PropTypes.object,
}

TodoItem.defaultProps = {
    id: '',
    isDone: false,
    content: '',
    category: '',
    date: null
}

export default TodoItem