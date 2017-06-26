import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames/bind'

import style from '../../assets/button.css'

const cx = className.bind(style)

console.log('cx', cx)

const LoginButton = (props) => {
    const className = {
        'btn-auth': true,
        'btn-auth-login': !props.isAuthorized,
        'btn-auth-logout': props.isAuthorized,
    }

    if (!props.isAuthorized) {
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
    isAuthorized: PropTypes.bool
}

LoginButton.defaultProps = {
    isAuthorized: false
}

export default LoginButton