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
    /*
    var i;
    for(i = 0; i < this.users.length; i++){
        if(username === this.currentUsername && password === this.currentUserPass){
            return true;
        }
    }
    return false;
    */
}

export function Login(username){
    Session.currentUser = username;
    
}

export function Logout() {
    Session.currentUser = null
}