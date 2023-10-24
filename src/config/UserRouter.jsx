import React from "react";
import Home from "../contents/User/Home";
import AboutUs from "../contents/User/AboutUs";
import { useRoutes } from "react-router-dom";
import Contact from "../contents/User/Contact";
import Setting from "../contents/Admin/Setting";
import ErrorPage from "../components/ErrorPage";

const user = (props) => {
    return[
        {
            index: true,
            path:"/",
            element: <Home {...props} title="Home" />
        },
        {
            index: true,
            path:"/about-us",
            element: <AboutUs {...props} title="About Us" />
        },
        {
            index: true,
            path:"/contact",
            element: <Contact {...props} title="Contact" />
        },
        {
            index: true,
            path: "/setting",
            element: <Setting title="Setting"/>
        },
        // {
        //     index: true,
        //     path: "/login",
        //     element: <Login title="Login" />
        // },
        {
            index: true,
            path:"*",
            element: <ErrorPage title="Error" />
        },
    ]
}

const UserRouter = (props) => {
    const routes = useRoutes(user(props))
    return routes
}

export default UserRouter;