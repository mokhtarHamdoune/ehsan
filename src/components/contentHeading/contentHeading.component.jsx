import React from 'react';
import './contentHeading.style.css';

const ContentHeading = ({children,reverse})=>{
    return (
        <div className={`content-heading-container ${reverse ? 'reverse-content' : ''}`}>
           <div className="content-heading">
               <div className="intro">
                   {children}
               </div>
           </div>
           <div className="content-heading">
             <h1>Ehsan</h1>
           </div>
        </div>
    );
}

export default ContentHeading;