import React from 'react';
import './linkButton.style.css';
const LinkButton = ({href,children,bg_color})=>{
    console.log();
    return (
        <a href={href} className={`linkButton ${bg_color}`}>
            {children}
        </a>
    );
}

export default LinkButton;