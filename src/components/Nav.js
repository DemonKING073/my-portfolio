import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>{
    return(
        <div>
            This is Nav man
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Nav;