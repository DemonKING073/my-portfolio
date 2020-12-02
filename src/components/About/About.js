import React from 'react';
import './about.css';
import myself from './35695.jpg';
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';

const About = () =>{
    
    return(
        <>
            <div className=".about">
                <h1 className="about-title">About Myself</h1>
                <div className="a-container">
                    <div className="one">
                        <img className="my-photo" src={myself} alt="Mero HO" />
                        <div className="name-div">
                            <h2>Din Bibek Thapa</h2>
                        </div>
                    </div>
                    <div className="two">
                        <div className="b-container">
                            <span>Hi</span>,  My Name is<span className="mero-nam">Din Bibek Thapa</span>, and I’m  
                            front-end web developer from Jhapa, Nepal. I have passion 
                            for building user-friendly , interactive , responsive Websites 
                            which focus on user experience.
                            
                        </div>
                    </div>
                    <div className="three">
                        <div className="b-container">
                        <h4 className="space"> <SchoolIcon/> EDUCATION:</h4>
                            <ul className="education">
                                <li>Diploma in Cs:<br /> Dr.  SMCE, 2019 
                                    Banglore, India
                                </li>
                            </ul>
                            <h4><LanguageIcon style={{height:18,width:18}}/> Languages:<br/></h4>
                            <ul className="education">
                                <li>English</li>
                                <li>Nepali</li>
                                <li>Hindi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;