import React from "react";

const ErrorPage = () => {
    console.log("error pagerender")
    return(
        <div className="container" style={{justifyContent: "center", display:"flex"}}>
            <h1>Page Not Found</h1>
        </div>
    )
}

export default ErrorPage;