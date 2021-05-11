import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h1> child component {this.props.childName}</h1>
                <button onClick={()=>this.props.parentClickHandler("parms sent by child")}>clickFromChild</button>
            </div>
        )
    }
}

export default ChildComponent
