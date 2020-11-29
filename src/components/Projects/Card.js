import React from 'react';


const Card = (props) =>{
    return(
        <div className="card">
            <div className="image-card">
                <div className="image-color">
                <img className="image" src={props.img} alt="lamo"/>

                </div>
                <div className="card-text">
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="preview-div">
                <span><a rel="noreferrer" target="_blank" href={props.gitLink}>Show Code</a></span>
                <span><a rel="noreferrer" target="_blank" href={props.prevLink}>Live Preview</a></span>
            </div>
        </div>
    );
}

export default Card;