import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LoginButton from '../src/components/Header/LoginButton'
import TodoHeader from '../src/components/Todo/TodoHeader'
import TodoItem from '../src/components/Todo/TodoItem'

import 'normalize.css'

const category_style = {
    normal: {
        id: 'normal',
        color: 'default'
    },
    work: {
        id: 'work',
        color: 'red'
    },
    family: {
        id: 'family',
        color: 'green'
    }
}

storiesOf('LoginButton', module)
    .add('not login', () => <LoginButton isAuthorized={false} />)
    .add('already login', () => <LoginButton isAuthorized={true}/>)

const dummyEvent = {
    onAddItem: ({ input_text, category }) => e => {
        e.preventDefault()
        console.log('onAddItem event')
    },

    onComplete: ({ id }) => e => {
        e.preventDefault()
        console.log('onComplete event')
    },

    onEdit: ({ id }) => e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('onEdit event')
    },

    onUpdateTodo: ({ id, input_text }) => e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('onUpdateTodo event')
    }
}

storiesOf('TodoHeader', module)
    .add('empty', () => <TodoHeader />)
    .add('default', () => <TodoHeader category_list={['normal', 'work', 'family']} category_style={category_style} {...dummyEvent}/>)

storiesOf('TodoItem', module)
    .add('empty item', () => <TodoItem />)
    .add('a default item', () => {
        const props = [
            {
                id: '1',
                isDone: false,
                content: 'default',
                category: 'normal',
                editable: false,
                date: new Date()
            }
        ]
        return (<TodoItem todos={props} {...dummyEvent} />)
    })
    .add('not complete', () => {
        const todos = [
            {
                id: '1',
                isDone: false,
                content: 'wait to do',
                editable: false,
                category: 'family',
                date: new Date()
            },
            {
                id: '2',
                isDone: false,
                content: 'wait to do',
                editable: false,
                category: 'work',
                date: new Date()
            },
            {
                id: '3',
                isDone: false,
                content: 'wait to do',
                editable: false,
                category: 'normal',
                date: new Date()
            }
        ]
        return (<TodoItem category_style={category_style} todos={todos} {...dummyEvent} />)
    })
    .add('complete', () => {
        const todos = [
            {
                id: '1',
                isDone: true,
                content: 'complete list',
                editable: false,
                category: 'family',
                date: new Date()
            },
            {
                id: '2',
                isDone: true,
                content: 'complete list',
                editable: false,
                category: 'work',
                date: new Date()
            },
            {
                id: '3',
                isDone: true,
                content: 'wait to do',
                editable: false,
                category: 'normal',
                date: new Date()
            }
        ]
        return (<TodoItem category_style={category_style} todos={todos} {...dummyEvent} />)
    })
    .add('editable', () => {
        const props = [
            {
                id: '1',
                isDone: false,
                content: 'default',
                category: 'normal',
                editable: true,
                date: new Date()
            }
        ]
        return (<TodoItem todos={props} {...dummyEvent} />)
    })