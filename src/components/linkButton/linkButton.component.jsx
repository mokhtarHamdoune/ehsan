import React from 'react';
import './linkButton.style.css';
import {Link} from 'react-router-dom';
const LinkButton = ({href,children,bg_color})=>{
    console.log();
    return (
        <Link to={href} className={`linkButton ${bg_color} linkButton-block`}>
            {children}
        </Link>
    );
}

export default LinkButton;