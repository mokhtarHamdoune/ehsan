import React from 'react';
import './switch.style.css';

const SwitchBtn = (props)=> {
        return (
        <div className='switch-container'>
            <span className='switch-text'>{props.text}</span>
            <label className='switch'>
                <input type="checkbox" onChange={props.handleChange} checked={props.checked} name={props.name}/>
                <span className='slider round'/>
            </label>
        </div>
        );
}
export default  SwitchBtn;