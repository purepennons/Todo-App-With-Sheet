import { connect } from 'react-redux'
import Header from '../components/Header/'

import { updateLoginStateAction } from '../actions/'
import { initGoogleAuth, loginGoogle, logoutGoogle } from '../handlers/auth'

export default connect(
    state => ({ auth: state.authState }),
    dispatch => ({
        init: () => {
            initGoogleAuth( isAuthorized => dispatch(updateLoginStateAction({ isAuthorized })) )
        },
        onLogin: e => {
            e.preventDefault()
            loginGoogle()
        },
        onLogout: e => {
            e.preventDefault()
            logoutGoogle()
        }
    })
)(Header)