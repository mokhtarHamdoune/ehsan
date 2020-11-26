import React from 'react';
import './button.style.css';

//color : primary ,secondary or link
const Button = ({type,color,children,block}) => {
    return(
        <button type={type} className={`btn btn-${color} ${block ? 'btn-block' : ''}`}>
            {children}
        </button>
    );
}
export default Button;