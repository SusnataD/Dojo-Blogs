import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="header">
            <nav className="navbar">
                <div className="brand">
                    <h1>The Dojo Blogs</h1>
                </div>
                <div className="links">
                    <ul className="header-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">New Blog</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;