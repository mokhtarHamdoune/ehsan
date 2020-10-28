import React from 'react';
import './linkButton.style.css';
import {Link} from 'react-router-dom';
const LinkButton = ({href,children,bg_color, className})=>{
    return (
        <Link to={href} className={`linkButton ${bg_color}`}>
            {children}
        </Link>
    );
}

export default LinkButton;