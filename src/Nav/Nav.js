import React from 'react';
import './NavCss.css';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import  Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';

const Nav = () =>{
    return(
        <>
            <header>
                <nav>
                    <h1 className="logo" ><Link to="/">Portfolio</Link></h1>
                    <input type="checkbox" className="menu-btn" id="menu-btn"/>
                    <label htmlFor="menu-btn" className="menu-icon"><span className="icon-div"></span></label>
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                </Switch>
            </header>
        </>
    );
}

export default Nav;