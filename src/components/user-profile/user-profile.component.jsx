import React from 'react';
import './user-profile.style.css';
import UserPic from '../../images/user-picture.png';
import {EditFilled,UserOutlined,CalendarOutlined,PhoneOutlined,BuildOutlined,HomeOutlined,
MailOutlined,LockOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal.component';
import FormInput from '../FormInput/form-input.component';
import Button from '../button/button.component';
class UserProfile  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModelAppear:false,
            appropriateForm:1,
            fullname:'John Snow',
            birthdate:'1997-07-24',
            work:'Soldier',
            address:'Winterfell',
            phone_n:'0665681568',
            email:'john_snow@gmail.com',
            password:'',
            password_confirm:''
        }
        this.ref = React.createRef();
        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleModalToggle(modalState,appropriateForm){
        this.setState({isModelAppear:modalState,appropriateForm:appropriateForm})
    }
    handleChange(e){
        const{name,value} = e.target;
        this.setState({[name]:value});
    }
    render(){
        const {isModelAppear,appropriateForm,fullname,birthdate,work,address,phone_n,email,password,password_confirm}=this.state;
        return (
            <div className="user-profile">
                <Modal title='modal' toggle={isModelAppear} handleLoginToggle={this.handleModalToggle} modalWidth='50%'>
                    <form className='user-profile-modal' method="post">
                        {appropriateForm === 1 ? 
                        <>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='text' label={'Full name'} value={fullname} name='fullname' id={'fullname'} handleChange={this.handleChange} />
                            </div>
                            <div className='form-col'>
                                <FormInput type='date' label={'Birth date'} value={birthdate} name='birthdate' id={'birthdate'} handleChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='text' label={'Your work'} value={work} name='work' id={'work'} handleChange={this.handleChange} />
                            </div>
                            <div className='form-col'>
                                <FormInput type='text' label={'Adress'} value={address} name='address' id={'address'} handleChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='text' label={'Phone N'}value={phone_n} name='phone_n' id={'phone_n'} handleChange={this.handleChange}/>
                            </div>
                        </div></>:
                        appropriateForm === 2 ? <>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='email' label={'Email'} value={email} name='email' id={'email'} handleChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='password' label={'Password'} value={password} name='password' id={'password'} handleChange={this.handleChange} />
                            </div>
                            <div className='form-col'>
                                <FormInput type='password' label={'Password Confirmation'} value={password_confirm} name='password_confirm' id={'password_confirm'} handleChange={this.handleChange} />
                            </div>
                        </div>
                        </>
                        :<>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='password' label={'New Password'} value={password} name='password' id={'password'} handleChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-col'>
                                <FormInput type='password' label={'Password Confirmation'} value={password_confirm} name='password_confirm' id={'password_confirm'} handleChange={this.handleChange} />
                            </div>
                        </div></>}
                        <Button type='submit' color='primary' block >Submit</Button>
                    </form>
                </Modal>
                <div className='user-pic'>
                    <img src={UserPic} alt='user face' />
                    <div className='change-pic'>
                        <span onClick={()=>this.ref.current.click()}>Change Picture<EditFilled/></span>
                        <input type="file" ref={this.ref}/>
                    </div>
                </div>
                <div className='about-user'>
                    <div className="about-header">
                        <h3>About You</h3>
                        <EditFilled className='edit-profile-icon' onClick={()=>this.handleModalToggle(true,1)} />
                    </div>
                    <div className='about-content'>
                        <ul className='user-info-list'>
                            <li><span><UserOutlined/> Full Name : </span>{fullname}</li>
                            <li><span><CalendarOutlined/> Birthdate : </span>{birthdate}</li>
                            <li><span><BuildOutlined/> Work : </span>{work}</li>
                            <li><span><HomeOutlined/> Address : </span>{address}</li>
                            <li><span><PhoneOutlined/> Phone.N : </span>{phone_n}</li>
                        </ul>
                    </div>
                </div>
                <div className='about-account'>
                    <div className="about-header">
                        <h3>About Your Account</h3>
                        <EditFilled className ='edit-profile-icon' onClick={()=>this.handleModalToggle(true,2)} />
                    </div>
                    <div className='about-content'>
                        <ul className='user-info-list'>
                            <li><span><MailOutlined/> Email : </span> john_snow@gmail.com</li>
                            <li><LockOutlined/> <a href="/edit-password"  className='list-item-link'
                                onClick={()=>this.handleModalToggle(true,3)}
                            >Change you passowrd</a></li>
                            <li><span><CalendarOutlined/> creation date : </span>10-12-2020</li>
                        </ul>
                    </div>
                </div>
                <div className='about-pub'>
                    <div className="about-header">
                        <h3>About publications</h3>
                    </div>
                    <div className='about-content'>
                        <ul className='pub-others-list'>
                            <li><span>N.Of Publications  : </span> 2</li>
                            <li><span>Date Of  Last Publications  : </span> 10-12-2020</li>
                            <li><span>Amount of last publication : </span>500M</li>
                            <li><span>The rest of the last publications : </span>200M</li>
                            <li><span>N.Of All donners : </span>2000</li>
                        </ul>
                    </div>
                </div>
                <div className='about-others'>
                    <div className="about-header">
                        <h3>Others ...</h3>
                    </div>
                    <div className='about-content'>
                        <ul className='pub-others-list'>
                            <li><span>N.Of Messages  : </span>8</li>
                            <li ><Link to='/messages' className='list-item-link' >Open the messages</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;