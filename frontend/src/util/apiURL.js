export const apiURL = () =>{
    return window.location.hostname  === 'localhost' ? 'http://localhost:3001' : 'http://firebase-auth-users.herokuapp.com'
}