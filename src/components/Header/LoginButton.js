import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames/bind'

import style from '../../assets/button.css'

const cx = className.bind(style)

const LoginButton = (props) => {
    const { isAuthorized } = props
    console.log('isAuthorized', isAuthorized)
    const className = {
        'btn-auth': true,
        'btn-auth-login': !isAuthorized,
        'btn-auth-logout': isAuthorized,
    }

    if (!isAuthorized) {
        return (
            <button className={cx(className)} onClick={ e => props.onLogin(e) }>Login</button>
        )
    } else {
        return (
            <button className={cx(className)} onClick={ e => props.onLogout(e) }>Logout</button>
        )
    }
}

LoginButton.propTypes = {
    isAuthorized: PropTypes.bool.isRequired
}

LoginButton.defaultProps = {
    isAuthorized: false
}

export default LoginButton