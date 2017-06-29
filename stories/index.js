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

storiesOf('TodoHeader', module)
    .add('empty', () => <TodoHeader />)
    .add('default', () => <TodoHeader category_list={['normal', 'work', 'family']} category_style={category_style}/>)

storiesOf('TodoItem', module)
    .add('empty item', () => <TodoItem />)
    .add('a default item', () => {
        const props = [
            {
                id: '1',
                isDone: false,
                content: 'default',
                category: 'normal',
                date: new Date()
            }
        ]
        return (<TodoItem todos={props} />)
    })
    .add('not complete', () => {
        const todos = [
            {
                id: '1',
                isDone: false,
                content: 'wait to do',
                category: 'family',
                date: new Date()
            },
            {
                id: '2',
                isDone: false,
                content: 'wait to do',
                category: 'work',
                date: new Date()
            },
            {
                id: '3',
                isDone: false,
                content: 'wait to do',
                category: 'normal',
                date: new Date()
            }
        ]
        return (<TodoItem category_style={category_style} todos={todos} />)
    })
    .add('complete', () => {
        const todos = [
            {
                id: '1',
                isDone: true,
                content: 'complete list',
                category: 'family',
                date: new Date()
            },
            {
                id: '2',
                isDone: true,
                content: 'complete list',
                category: 'work',
                date: new Date()
            },
            {
                id: '3',
                isDone: true,
                content: 'wait to do',
                category: 'normal',
                date: new Date()
            }
        ]
        return (<TodoItem category_style={category_style} todos={todos} />)
    })