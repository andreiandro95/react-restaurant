import React from 'react';
import {Link} from "react-router-dom";
import logo from '../Images/logo.png'
import "../Style/navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuFunction = () => {
        setOpenMenu(prevState => !prevState);
    }

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo restaurant" />
            </div>
            <div className="open-menu-btn" onClick={openMenuFunction}>
                {openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <div className={`navigation ${openMenu ? "show" : "hide"}`}>
                <Link to="/">Homepage</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/reservation">Reservation</Link>
            </div>
        </nav>
    );
}

export default Navbar;