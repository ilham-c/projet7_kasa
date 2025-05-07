import React from "react";
import LOGO from "../../assets/LOGO.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <nav className="header">
            <div className="header_logo"><img src={LOGO} alt="Kasa" /></div>
            <ul className="header_titles">
                <li className="navItem">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Accueil</NavLink>
                </li>
                <li className="navItem">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>A propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Header



