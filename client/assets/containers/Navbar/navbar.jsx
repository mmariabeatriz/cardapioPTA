import React from "react";
import logo from './logo.jpg';

import './navbar.css';

function navbar () {
    return(
        <header>
            <img id="logo" src={logo} alt="logo"></img>
        </header>
    );
};

export default navbar;
