import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../stores/slice/counterSlice";
import { Navigate } from "react-router-dom";
import { Token } from "../../config/Token";

const Setting = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    if (!Token) return <Navigate to={"/login"} />
    if (Token !== "isAdmin") return <div>Sorry, you have no access to this page</div>
    return(
        <div className="container">
            <h1>Setting</h1>
            <button aria-label="Increment value"
            onClick={() => dispatch(increment())}>
                Increment
            </button>
            <span>{count}</span>
            <button aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}

export default Setting;