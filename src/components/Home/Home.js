import React from 'react';
import './home.css';


const Home = () =>{
    return(
        <>
            <div className="home page-transition">
                <h1 className="parent">Welcome <span className="date">April 13, 2020</span></h1>
                <h1> To <span>Din Bibek Thapa's</span></h1>
                <h1 className="bottom-parent">Portfolio site <span  className="bottom-text">Projects, Featured</span></h1>
            </div>
        </>
    );
}

export default Home;