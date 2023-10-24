import React from "react";

const Card = ({children}) => {
    console.log("card render")
    return(
        <div className="card">{children}</div>
    )
}

export default Card;