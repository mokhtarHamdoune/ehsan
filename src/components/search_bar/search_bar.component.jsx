import React from 'react';
import chroma from 'chroma-js';
import Button from '../button/button.component';
import Select from 'react-select';
import {typeDnation,status,wilayas} from './data';
//icons 
import { FilterFilled } from '@ant-design/icons';

//css
import './search_bar.style.css'

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

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
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
    control: styles => ({ ...styles, backgroundColor: 'white' }),
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
    placeholder: styles => ({ ...styles,fontFamily:'arial'}),
  };

class SearchBar extends React.Component{
    
    handleChange(e,selectId){
        this.props.handleSelectChange(selectId,e);
    }

    render(){
        return (
            <div className="sb-container">
                <form action="" className="sb-form">
                    <div className="sb-form-part">
                        <label>Donation for</label>
                        <Select 
                        options={typeDnation} 
                        isClearable 
                        placeholder="Select" 
                        isMulti 
                        styles={simpleStyle}
                        onChange={this.handleChange.bind(this,'type')} /> 
                    </div>
                    <div className="sb-form-part">
                        <label>Specific Willaya</label>
                        <Select
                        options={wilayas} 
                        isSearchable={false} 
                        isClearable placeholder="Select" 
                        isMulti 
                        styles={simpleStyle}
                        onChange={this.handleChange.bind(this,'wilaya')}/>
                    </div>
                    <div className="sb-form-part">
                        <label>Status</label>
                        <Select 
                        options={status} 
                        styles={colourStyles}
                        isSearchable={false} 
                        isClearable 
                        placeholder="Select"
                        onChange={this.handleChange.bind(this,'status')}/>
                    </div>
                    <div className="sb-form-part">
                        <input
                            name="isAlmostGoing"
                            type="checkbox"
                            checked={this.props.isAlmostGoing}
                            onChange={this.props.handleInputChange} />
                        <label htmlFor="">Almost Goal</label>
                    </div>
                    <Button type="submit" color="secondary">Filter <FilterFilled/></Button>
                </form> 
            </div>
        )

    }
    
}
export default SearchBar;