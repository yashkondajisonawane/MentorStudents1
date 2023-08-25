import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
};

const Navbar= () =>{
    return (
        <nav>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/register' style={linkStyle}>Register</Link>
            <Link to='/login' style={linkStyle}>Login</Link>
        </nav>
    )
}

export default Navbar;