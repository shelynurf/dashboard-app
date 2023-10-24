import React from "react";

const Input = ({label, ...props}) => {
    console.log("input render")
    return(
        <div className="form">
            <label>{label}</label>
            <input className="input" {...props}/>
        </div>
    )
}

export default Input;