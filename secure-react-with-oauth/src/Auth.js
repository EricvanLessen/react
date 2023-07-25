/* eslint no-restricted-globals: 0*/
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-uiorw3jvxs6h5rt8.us.auth0.com",
        clientID: "3G3TPOqA5rqfTkCkew7Q5UNqixutrVz6",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://dev-uiorw3jvxs6h5rt8.us.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err, authResults) => {
            if(authResults && authResults.accessToken && authResults.idToken){
                let expiresAt = (authResults.expiresIn * 1000) + new Date().getTime();
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expiresAt", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            } else if (authResults == null) {
                console.log(`authResults is: ${authResults}`)
            } 
        })
    }

    isAuthenticated(){
        console.log("checking")
        let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expiresAt");
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    getProfile(){
        if(localStorage.getItem("id_token")){
            return jwtDecode(localStorage.getItem("id_token"))
        } else {
            return {}
        }
    }
}

