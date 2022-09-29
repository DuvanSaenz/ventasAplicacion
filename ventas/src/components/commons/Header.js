import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(

        <div className = "navbar is-primary">
            <div className="navbar-bram">
                <Link to="/" className="navbar-item">
                    <img src ="logo.png" alt ="logo"/>
                </Link>
            </div>
        </div>
    

    );
}
export default Header;