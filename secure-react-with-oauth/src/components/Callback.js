import React, { Component } from 'react';
import Auth from "../Auth";

export default class Callback extends Component {
    componentDidMount(){
        console.log("callback")
        const auth = new Auth();
        console.log(auth.isAuthenticated())
        auth.handleAuthentication();
    }
    render(){
        return (
            <div>
                <p>
                    Loading . . . 
                </p>
            </div>
        )
    }
}