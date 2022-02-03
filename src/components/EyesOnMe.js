import React from "react";

function EyesOnMe({focus}){
    return(
        <button focus={focus}>Eyes on me</button>
    )
}


function focus(e){
    if(e === onblur){
        console.log("Hey! Eyes on me!")
    }else{
        console.log("Good!")
    }
}

export default EyesOnMe