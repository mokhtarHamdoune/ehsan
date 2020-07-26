import React from 'react';
import './contentHeading.style.css';
import LinkButton from '../linkButton/linkButton.component';
const ContentHeading = ()=>{
    return (
        <div className="content-heading-container">
           <div className="content-heading">
               <div className="intro">
                    <p className="">If you are one  of the people who want  to help people for doing therapy, building their house, or help the charity community </p>
                    <LinkButton href="#donate" bg_color="link">Click Here</LinkButton>
               </div>
           </div>
           <div className="content-heading">
             <h1>Ehsan</h1>
           </div>
        </div>
    );
}

export default ContentHeading;