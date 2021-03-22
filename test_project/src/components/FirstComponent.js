import React from 'react';

const Hello = (props) => {
    //console.log("The properties sent by App.js are ->"+JSON.stringify(props)); //can't do JSON.stringify when children are added to component by App.js
    return (
        <div>
            <h1> Hello {props.name} {props.lastName}, Welcome to test project </h1>
            {props.children}
        </div>
    )
}

export default Hello;