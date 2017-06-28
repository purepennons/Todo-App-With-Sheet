import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'
import TodoContainer from '../../containers/TodoContainer'

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />    
            <TodoContainer />
        </div>
    )
}

export default Main