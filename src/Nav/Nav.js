import React from 'react';
// import { Link } from 'react-router-dom';
import './NavCss.css'

const Nav = () =>{
    return(
        <>
            <header>
                <nav>
                    <h1>myLogo</h1>
                    <div className="menu-icon-div">
                        <input type="checkbox" className="menu-btn" id="menu-btn"/>
                        <label htmlFor="menu-btn" className="menu-icon"><div className="menu-icon">mobile menu</div></label>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Nav;