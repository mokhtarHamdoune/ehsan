import React from 'react';
import './button.style.css';

const Button = ({type,color,children}) => {
    return(
        <button type={type} className={`btn btn-${color}`}>
            {children}
        </button>
    );
}
export default Button;