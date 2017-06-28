import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LoginButton from '../src/components/Header/LoginButton'
import TodoHeader from '../src/components/Todo/TodoHeader'
import TodoItem from '../src/components/Todo/TodoItem'

import 'normalize.css'

storiesOf('LoginButton', module)
    .add('not login', () => <LoginButton isAuthorized={false} />)
    .add('already login', () => <LoginButton isAuthorized={true}/>)

storiesOf('TodoHeader', module)
    .add('no input', () => <TodoHeader />)

storiesOf('TodoItem', module)
    .add('empty item', () => <TodoItem />)
    .add('a default item', () => {
        const props = [
            {
                id: '',
                isDone: false,
                content: '',
                category: '',
                date: null
            }
        ]
        return (<TodoItem todos={props} />)
    })
    .add('not complete', () => {
        const props = [
            {
                id: '1',
                isDone: false,
                content: 'wait to do',
                category: 'green',
                date: new Date()
            },
            {
                id: '2',
                isDone: false,
                content: 'wait to do',
                category: 'red',
                date: new Date()
            },
        ]
        return (<TodoItem todos={props} />)
    })
    .add('complete', () => {
        const props = [
            {
                id: '1',
                isDone: true,
                content: 'complete list',
                category: 'green',
                date: new Date()
            },
            {
                id: '2',
                isDone: true,
                content: 'complete list',
                category: 'red',
                date: new Date()
            },
        ]
        return (<TodoItem todos={props} />)
    })