import React from "react";

function EyesOnMe({}){
    return(
        <button onBlur={blur} onFocus={focus} >Eyes on me</button>
    )
}


function blur(){
    console.log("Hey! Eyes on me!")
}

function focus(){
    console.log("Good!")
}

export default EyesOnMe