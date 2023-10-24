import React, { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { useSelector, useDispatch } from 'react-redux'
import { show } from "../stores/slice/expandSlice";
import { Token } from "../config/Token";

const Navbar = () => {
    const expand = useSelector((state) => state.expander.exp);
    const dispatch = useDispatch();
    console.log("expand", expand);
    if (!Token) return null;

    console.log("header render")

    // 
    return (
        <div className="navbar">
            <div className="header">
                <div onClick={() => dispatch(show())}>
                    {expand==true ? <img className="icon" src={'svg/left-arrow.png'} alt="logo" /> : <img className="icon" src={'svg/menu.png'} alt="logo" />}
                </div>
                <h4>Dashboard</h4>                
            </div>
            <ProfileMenu/>
        </div>
    )
}

export default Navbar;
