import React, { Component } from 'react'
//16 - Conditional Rendering
export class UserGreeting extends Component {
    constructor(props) {
        super(props)    
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn?<div>Hello mohnish</div>:<div>hello guest</div>
        )
    }
}

export default UserGreeting
