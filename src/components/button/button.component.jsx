import React from 'react';
import './button.style.css';

//color : primary ,secondary or link
const Button = ({type,color,children,block,...rest }) => {
    return(
        <button type={type} className={`btn btn-${color} ${block ? 'btn-block' : ''}`} {...rest}>
            {children}
        </button>
    );
}
export default Button;