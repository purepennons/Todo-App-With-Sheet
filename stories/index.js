import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TodoItem from '../src/components/Todo/TodoItem'

const TodoItemProps = {
    id: '1',
    isDone: false,
    content: 'A todo item',
    category: '',
    date: new Date()
}

storiesOf('TodoItem', module)
    .add('with props', () => <TodoItem todo={TodoItemProps}/>)
