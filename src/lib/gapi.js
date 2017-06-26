const default_ops = {
    apiKey: process.env.REACT_APP_APIKEY,
    clientId: process.env.REACT_APP_CLIENTID,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    // scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    discoveryDocs: [
        'https://sheets.googleapis.com/$discovery/rest?version=v4'
    ]
}

const gapi =  window.gapi

export const initGoogleAuth = (update_cb, options = default_ops) => {
    gapi.load('client:auth2', () => init(update_cb, options))
}

function init(update_cb, options = default_ops) {
    if (!options.apiKey || !options.clientId) throw new Error('without google api key or client id')
    
    return gapi.client.init(options)
        .then(() => {
            let GoogleAuth = gapi.auth2.getAuthInstance()

            // listen updating
            GoogleAuth.isSignedIn.listen(update_cb)

            // initial login state
            update_cb(GoogleAuth.isSignedIn.get())
        }, err => console.error('err', err))
}

export const loginGoogle = () => {
    gapi.auth2.getAuthInstance().signIn()
}

export const logoutGoogle = () => {
    gapi.auth2.getAuthInstance().signOut()
}