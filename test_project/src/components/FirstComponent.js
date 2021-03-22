import React from 'react';

const Hello = (props) => {
    console.log("The properties sent by App.js are ->"+JSON.stringify(props));
    return <h1> Hello {props.name} {props.lastName}, Welcome to test project </h1>
}

export default Hello;