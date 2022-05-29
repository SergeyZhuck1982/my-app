import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


const Layout = () => {
    let activeStyle = {
        textDecoration: "none",
        color: "gold",
        fontWeight: "bold",
        margin: "0 5px"
    };
    let deactiveStyle = {
        textDecoration: "none",
        color: "#ffffff",
        margin: "0 5px"
    }

    return (
        <div className="layout">
            <nav className='main__menu'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : deactiveStyle} to="/">Home</NavLink> | {" "}
                <NavLink style={({ isActive }) => isActive ? activeStyle : deactiveStyle} to="posts">Posts</NavLink> | {" "}
                <NavLink style={({ isActive }) => isActive ? activeStyle : deactiveStyle} to="about">About</NavLink>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;