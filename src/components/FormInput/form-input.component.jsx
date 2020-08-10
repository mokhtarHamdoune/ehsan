import React from 'react';
import './form-input.style.css';
const FormInput = ({id,label,type,name,handleChange,...rest})=>{
    return (
        <div  className="form-input">
            <input id={id} type={type} name={name} {...rest}  onChange={handleChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
export default FormInput;