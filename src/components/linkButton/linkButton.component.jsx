import React from 'react';
import './linkButton.style.css';
import {Link} from 'react-router-dom';
const LinkButton = ({href,children,bg_color,simpleLink,rounded, className})=>{
    return (
        simpleLink === true ?
        <a href={href} className={`linkButton ${bg_color}`}>
            {children}
        </a>:
        <Link to={href} className={`linkButton ${bg_color} ${rounded ? 'rounded' :''}`}>
            {children}
        </Link>
    );
}

export default LinkButton;