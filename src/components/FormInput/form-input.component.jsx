import React from 'react';
import './form-input.style.css';
const FormInput = ({id,label,type,name,...rest})=>{
    return (
        <div  className="form-input">
            <input id={id} type={type} name={name} {...rest}  />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
export default FormInput;