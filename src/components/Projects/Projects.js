import React from 'react';
import './projects.css';
import Card from './Card';
import image1 from './lamo/lamo.png';
import image2 from './lamo/lamo2.png';
import image3 from './lamo/lamo3.png';
import image4 from './lamo/lamo4.png';

const imgs = [
    {
        img:image2,
        gitLink:'https://github.com/DemonKING073/tribute-page',
        prevLink:'https://gifted-ptolemy-c45728.netlify.app/',
        name:'Tribute'
    },
    {
        img:image3,
        gitLink:'https://github.com/DemonKING073/todo-app',
        prevLink:'https://friendly-perlman-2173ad.netlify.app/',
        name:'Todo App'
    },
    {
        img:image4,
        gitLink:'https://github.com/DemonKING073/weatherApp',
        prevLink:'https://practical-raman-adf636.netlify.app/',
        name:'Weather App'
    },
    {
        img:image1,
        gitLink:'https://github.com/DemonKING073/resturant',
        prevLink:'https://sharp-mclean-b16d1d.netlify.app/',
        name:'Resturant App'
    }
];


const Projects = () =>{
    return(
        <>
            <div  className="projects page-transition" >
                <h1 className="p-title">Some of My Projects</h1>
                <div className="card-container">
                   {
                       imgs.map((item,index)=>(
                           <Card key={index} name ={item.name} img={item.img} gitLink={item.gitLink} prevLink={item.prevLink}/>
                       ))
                   }
                </div>
            </div>
        </>
    );
}

export default Projects;