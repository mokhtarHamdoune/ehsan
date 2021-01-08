import React from 'react';
import Button from '../button/button.component';
import {typeDnation,status,wilayas} from './data';
import MySelect from '../my-select/my-select.component'
//icons 
import { FilterFilled } from '@ant-design/icons';

//css
import './search_bar.style.css'

const  SearchBar = (props) =>{
    return (
    <div className="sb-container">
        <form action="" className="sb-form">
            <div className="sb-form-select">
                <MySelect 
                name='type'
                label='Donation for'
                options={typeDnation} 
                isClearable 
                placeholder="Select" 
                isMulti 
                handleSelectChange={props.handleSelectChange} /> 
            </div>
            <div className="sb-form-select">
                <MySelect
                name='wilaya'
                label='Specific Willaya'
                options={wilayas} 
                isSearchable={false} 
                isClearable 
                placeholder="Select" 
                isMulti 
                handleSelectChange={props.handleSelectChange}/>
            </div>
            <div className="sb-form-select">
                <MySelect 
                name='status'
                label='Status'
                options={status} 
                isColoredStyle
                isSearchable={false} 
                isClearable 
                placeholder="Select"
                handleSelectChange={props.handleSelectChange}/>
            </div>
            <div className="sb-form-input">
                <div>
                    <input
                        name="isAlmostGoing"
                        type="checkbox"
                        checked={props.isAlmostGoing}
                        onChange={props.handleInputChange} />
                    <label htmlFor="">Almost Goal</label>
                </div>
                <Button type="submit" color="secondary">Filter <FilterFilled/></Button>
            </div>
        </form> 
    </div>
    );
}
export default SearchBar;