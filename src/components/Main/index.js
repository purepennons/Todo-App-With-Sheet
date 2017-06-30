import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'
import TodoContainer from '../../containers/TodoContainer'

// import '../../assets/general.css'

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />    
            <TodoContainer />
        </div>
    )
}

export default Main