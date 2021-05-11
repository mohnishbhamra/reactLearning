import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "parent"
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent() {
        alert(`Hello from parent, message is -> ${this.state.parentName}`);
    }

   
    render() {
        return (
            <div>
            render of parent component
            <ChildComponent childName="test" parentClickHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
