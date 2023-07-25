import React, { Component } from 'react';

export default class Secret extends Component {
    render(){
        return (
            <div>
                <p>
                    This is a super secret area. Go back <a href="/">home</a>
                    <br/>
                    <button onClick = {this.props.auth.logout}>Logout</button>
                </p>
            </div>
        )
    }
}