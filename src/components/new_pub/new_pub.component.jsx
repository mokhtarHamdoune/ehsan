import React,{Component} from 'react';
import './new_pub.style.css';
import FormInput from '../FormInput/form-input.component';
import SwitchBtn from '../switch/switch.component';
import MySelect from '../my-select/my-select.component';
import {typeDnation,status} from '../search_bar/data';
import Button from '../button/button.component';
import {FacebookFilled,InstagramFilled,TwitterCircleFilled,GooglePlusCircleFilled,SendOutlined} from '@ant-design/icons';
import DropZone from '../drop-zone/drop_zone.component';

class  NewPub extends Component{
    constructor(props){
        super(props);
        this.state={
            isSwitched:false,
            full_name:'',
            birth_date:'1990-01-01',
            phone:'',
            address:'',
            title:'',
            type:'',
            amount:'',
            status:'',
            description:'',
            images:[],
            facebook:'',
            instagram:'',
            twitter:'',
            googleplus:''
        }

        this.handleChange =  this.handleChange.bind(this);
        this.handleImages = this.handleImages.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(type,option){
        this.setState({[type]:option.value});
    }

    handleImages(images){
        this.setState({images:images});
    }
    handleChange(e){
        let target = e.target;
        let {name,value} = target;
        target.type === 'checkbox' ? value = target.checked : value= target.value;
        this.setState({[name]:value});
    }
    render(){
        return (
            <form className='new-pub-container'>
                <div className='new-pub-part'>
                    <div className='new-pub-header'>
                        <h2>About The Publication</h2>
                    </div>
                    <div className='new-pub-content'>
                        <div className='choice-switch'>
                            <SwitchBtn text='Is this publication for another personne? if yes check the box'  
                            checked={this.state.isSwitched} 
                            name='isSwitched'
                            handleChange={this.handleChange}/>
                        </div>
                        <div className='new-pub-row'>
                            <div className='new-pub-col'>
                                <FormInput type='text' 
                                label='Full Name'
                                id='full_name' 
                                name='full_name'
                                value={this.state.full_name}
                                handleChange={this.handleChange} 
                                disabled={!this.state.isSwitched}/>
                            </div>
                            <div className='new-pub-col'>
                                <FormInput type='date'
                                label='Birth Date' 
                                id='birth_date'
                                name='birth_date'
                                value={this.state.birth_date}
                                handleChange={this.handleChange}
                                disabled={!this.state.isSwitched}/>
                            </div>
                        </div>
                        <div className='new-pub-row'>
                            <div className='new-pub-col'>
                                <FormInput type='text' 
                                label='Phone.N'
                                id='phone' 
                                name='phone'
                                value={this.state.phone}
                                handleChange={this.handleChange}
                                disabled={!this.state.isSwitched}/>
                            </div>
                            <div className='new-pub-col'>
                                <FormInput type='text'
                                label='Address' 
                                id='address'
                                name='address'
                                value={this.state.address}
                                handleChange={this.handleChange}
                                disabled={!this.state.isSwitched}/>
                            </div>
                        </div>
                        <hr/>  
                        <div className='new-pub-row'>
                            <div className='new-pub-col'>
                                <FormInput type='text' 
                                label='Title'
                                id='title' 
                                name='title'
                                value={this.state.title}
                                handleChange={this.handleChange} 
                                />
                            </div>
                            <div className='new-pub-col'>
                                <MySelect name='type' 
                                options={typeDnation}
                                handleSelectChange={this.handleSelectChange}
                                placeholder='Donation Type'
                                isWithoutBorder
                                />
                            </div>
                        </div>
                        <div className='new-pub-row'>
                            <div className='new-pub-col'>
                                <FormInput type='text' 
                                label='Amount'
                                id='amount' 
                                name='amount'
                                value={this.state.amount}
                                handleChange={this.handleChange}
                                />
                            </div>
                            <div className='new-pub-col'>
                                <MySelect name='status' 
                                options={status}
                                handleSelectChange={this.handleSelectChange} 
                                isColoredStyle
                                isWithoutBorder
                                placeholder='Status Of Publication' />
                            </div>
                        </div>
                        <div className='new-pub-row'>
                            <div className='new-pub-col'>
                                <FormInput type='textarea' 
                                label='Description'
                                id='description' 
                                name='description'
                                rows={5}
                                value={this.state.description}
                                handleChange={this.handleChange} 
                                />
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='new-pub-part'>
                    <div className='new-pub-header'>
                        <h2>Upload your images</h2>
                    </div>
                    <div className='new-pub-content'>
                        <DropZone dropMsg='Drag and drop some images here, or click to select images'
                         handleImages={this.handleImages}/>
                    </div>
                </div>
                <div className='new-pub-part'>
                    <div className='new-pub-header'>
                        <h2>Link to social media</h2>
                    </div>
                    <div className='new-pub-content'>
                        <div className='new-pub-row'>
                            <div className='new-pub-col social-media'>
                                <FacebookFilled style={{fontSize:30,marginRight:'10px'}}/>
                                <FormInput type='text' 
                                label='Facebook'
                                id='facebook' 
                                name='facebook'
                                value={this.state.facebook}
                                handleChange={this.handleChange} 
                                />
                            </div>
                            <div className='new-pub-col social-media'>
                                <InstagramFilled style={{fontSize:30,marginRight:'10px'}}/>
                                <FormInput type='text'
                                name='instagram'
                                label='Instagram'
                                value={this.state.instagram}
                                handleChange={this.handleChange}  />
                            </div>
                        </div>
                        <div className='new-pub-row'>
                            <div className='new-pub-col social-media'>
                                <TwitterCircleFilled style={{fontSize:30,marginRight:'10px'}}/>
                                <FormInput type='text' 
                                label='Twitter'
                                id='twitter' 
                                name='twitter'
                                value={this.state.twitter}
                                handleChange={this.handleChange} 
                                />
                            </div> 
                            <div className='new-pub-col social-media'>
                                <GooglePlusCircleFilled style={{fontSize:30,marginRight:'10px'}}/>
                                <FormInput type='text'
                                label='Google +' 
                                id='googleplus'
                                name='googleplus'
                                value={this.state.googleplus}
                                handleChange={this.handleChange}  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='submitBtn-container'>
                    <Button type='submit' color='primary'>Share your Publication <SendOutlined rotate={-30}/></Button>
                </div>
            </form>
        )
    }
}
export default NewPub;