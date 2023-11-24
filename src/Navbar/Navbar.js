import React from "react";
import classes from './navbar.module.css'
const Navbar = () => {
    return(
        <header>
            <nav className={classes.TopBar}>
            <img src="https://m.media-amazon.com/images/G/15/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_ca-main._CB468775011_.png" alt="amazon"/>
            </nav>
        </header>
    );
}

export default Navbar;