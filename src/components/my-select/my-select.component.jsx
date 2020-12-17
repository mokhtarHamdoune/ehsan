import React from 'react';
import './my-select.style.css';
import Select from 'react-select';
import chroma from 'chroma-js';
const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
});
function MySelect({name,options,isColoredStyle,handleSelectChange,label,isWithoutBorder,...rest}){

  const withoutBorder={
    borderTop:'none',
    borderRight:'none',
    borderLeft:'none',
    borderRadius:'0px' 
  }

  let borderStyle = isWithoutBorder ? {...withoutBorder} : {};
  
  const colourStyles = {
      control: styles => ({ ...styles, backgroundColor: 'white',...borderStyle}),
      option: (styles, { data, isFocused, isSelected }) => {
        const color = chroma(data.value);
        return {
          ...styles,
          fontFamily:'arial',
          backgroundColor:isSelected
          ? data.value
          : isFocused
          ? color.alpha(0.1).css()
          : null,
          color: isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
              : data.value,
          ':active': {
            ...styles[':active'],
            backgroundColor: isSelected ? data.value : color.alpha(0.3).css(),
          },
        };
      },
      input: styles => ({ ...styles,fontFamily:'arial', ...dot() }),
      placeholder: styles => ({ ...styles,fontFamily:'arial', ...dot() }),
      singleValue: (styles, { data }) => ({ ...styles,fontFamily:'arial', ...dot(data.value) }),
  };

  const simpleStyle = {
      control: styles => ({ ...styles, backgroundColor: 'white',...borderStyle}),
      option: (styles, {isFocused, isSelected }) => {
          const color = chroma('#03A693');
          return {
          ...styles,
          fontFamily:'arial',
          backgroundColor:isFocused
          ? color.alpha(0.5).css()
          : null,
          color:isFocused? 'white':null,
          };
      },
      placeholder: styles => ({ ...styles,fontFamily:'arial'})
  };
    return (
        <>
            <label className='my-select-label'>{label}</label>
            <Select name={name} 
            options={options} 
            styles={isColoredStyle ? colourStyles:simpleStyle}
            onChange={(e)=>handleSelectChange(name,e)} 
            {...rest}/>
        </>
    );
}

export default MySelect;