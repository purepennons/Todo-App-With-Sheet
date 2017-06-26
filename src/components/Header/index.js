import React, { Component } from 'react'

import LoginButton from './LoginButton'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.init()
    }
    
    render() {
        const { auth, onLogin, onLogout } = this.props
        return (
            <nav>
                <LoginButton
                    isAuthorized={auth.isAuthorized}
                    onLogin={onLogin}
                    onLogout={onLogout}
                />
            </nav>
        )
    }
}

export default Header