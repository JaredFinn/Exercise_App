/* JF
    Holds the user session. Is a singleton.
*/
const Session = {
    currentUser: null,
    currentUserHandle: null,
    
    message: [] // To be used later
    
}
export default Session;

export function Login(user, handle){
    Session.currentUser = user;
    Session.currentUserHandle = handle;
}

export function Logout() {
    Session.currentUser = null
}