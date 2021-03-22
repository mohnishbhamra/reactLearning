import React, { Component } from 'react';

class ComponentForState extends Component {
    
    constructor() {
        super();
        this.state = {
            msg: "state message 1"
        }
    
    }

    toggleStateMessage() {
        if (this.state.msg == "state message 1") {
            this.setState(
                {
                    msg: "state message 2"
                }       
            );
        } else {
            this.setState(
                {
                    msg: "state message 1"
                }       
            );
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.toggleStateMessage()} >click me to toggle the state message</button>
            </div >
        )
    }
}

export default ComponentForState;