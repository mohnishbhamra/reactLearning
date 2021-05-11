import React, { Component } from 'react';

class ComponentForState extends Component {
    
    constructor() {
        super();
        this.state = {
            msg: "state message 1"
        }
        //way 2 for binding this
        this.toggleStateMessage = this.toggleStateMessage.bind(this);
    }

    toggleStateMessage() {
        if (this.state.msg == "state message 1") {
            this.setState(
                {
                    msg: "state message way 2"
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
                {/* <button onClick={()=>this.toggleStateMessage()} >click me to toggle the state message</button> //this is the one way to bind "this", but has perf issues*/}
                <button onClick={this.toggleStateMessage} >click me to toggle the state message</button>
            </div >
        )
    }
}

export default ComponentForState;