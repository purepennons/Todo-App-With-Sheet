import { connect } from 'react-redux'
import Todo from '../components/Todo/'

import {  } from '../actions/'
import {  } from '../handlers/todo'

export default connect(
    state => ({ todo: state.TodoState }),
    dispatch => ({})
)(Todo)