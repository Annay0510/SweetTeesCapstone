import React from "react";

const body = {
    backgroundcolor: "light blue",
    justifyContent: "center",
};
const heading = {
    color: "dark blue",
    justifyContent: "center",
}

const Welcome =() =>{
   return(<div style={body}>
        <h1 style = {heading}>Welcome to Sweet Tee's!</h1>
    </div>
   )
}; 

export default Welcome;