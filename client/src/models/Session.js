/* JF
    Holds the user session. Is a singleton.
*/
const Session = {
    user: null,
    message: [] // To be used later
    
}
export default Session;

export function Login(username) {
    Session.user = { user: username }
}

export function Logout() {
    Session.user = null
}