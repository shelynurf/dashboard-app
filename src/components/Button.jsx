import React from "react";

const Button = ({children}) => {
    console.log("button render")
    return (
        <button className="button">{children}</button>
    )
}

export default Button;