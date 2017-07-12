import { connect } from 'react-redux'
import Header from '../components/Header/'

import { updateLoginStateAction } from '../actions/'
import { initGoogleAuth, loginGoogle, logoutGoogle } from '../handlers/auth'
import Sheets from '../lib/sheets'

const gapi = window.gapi

export default connect(
    state => ({ auth: state.AuthState }),
    dispatch => ({
        init: () => {
            initGoogleAuth(isAuthorized => { 
                dispatch(updateLoginStateAction({ isAuthorized }))
                // TODO: check session or create a new sheet
                const sheet_id = '1iuvqurRBFbq25_rr3RS0i3a0Fn0CjXMLAcd7Gad46lo'
                window.sheet = new Sheets(gapi.client, sheet_id)
            })
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