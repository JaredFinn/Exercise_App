/* JF
    Holds the user session. Is a singleton.
*/
const Session = {
    currentUser: null,
    
    message: [] // To be used later
    
}
export default Session;

export function CheckLogin(username, password) {
    if(username === this.currentUsername && password === this.currentUserPass){
        return true;
    }
    else
        return false;
}

export function Login(username){
    Session.currentUser = username;
    
}

export function Logout() {
    Session.currentUser = null
}