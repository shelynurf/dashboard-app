import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../config/Token";


const ProfileMenu = () =>
{
    console.log("profile menu render")
    const [expand, setExpand] = useState(false)
    return (
        <div>

            <div className="account-info" onClick={() => setExpand(!expand)}>
                <div>
                    <img className="icon" src={'svg/profile-icon.png'} alt="profile"/>
                </div>
                {Token === "isUser" && <h4>User</h4>}
                {Token === "isAdmin" && <h4>Admin</h4>}
                
                <img className="icon" src={expand ? 'svg/up-arrow.png' : 'svg/down-arrow.png'}/>
            </div>
            {expand && 
            <div className="menu">
                <div className="dropdown">
                    <div className="list-menu-account">
                        <p style={{margin:"0"}}>Profile</p>
                    </div>
                    <div className="list-menu-account">
                        <p style={{margin:"0"}}>Setting</p>
                    </div>
                    <div className="list-menu-account" onClick={() => {
                        sessionStorage.removeItem("token");
                        window.location.reload();
                    }}>
                        <p style={{margin:"0"}}>Logout</p>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}

export default ProfileMenu;