import React from 'react';
import FormInput from '../FormInput/form-input.component';
import Button from '../button/button.component';
import {DoubleLeftOutlined} from '@ant-design/icons'
import './sign-up.style.css';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            user_name:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        const {email,user_name,password}=this.state;
        return(
            <div className="sign-up-container">
                <div className="sign-up-left">
                    <div className='form-container'>
                        <h1>Sign Up</h1>
                        <form>
                            <div className='sign-up-row'>
                                <FormInput label="Email*" id="email" type="email" name="email" value={email}  handleChange={this.handleChange} />
                            </div>
                            <div className='sign-up-row'>
                                <FormInput label="User name*" id="user_name" type="text" name="user_name" value={user_name} handleChange={this.handleChange} />
                            </div>
                            <div className='sign-up-row'>
                                <FormInput label="Password*" id="password" type="password" name="password" value={password} handleChange={this.handleChange}/>
                            </div>
                            <div className='sign-up-row'>
                                <Button type="submit" color='secondary'>Connextion</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="sign-up-right">
                    <h1>Ehsan</h1>
                    <ul className="requirements">
                        <li>You are the one who need help,</li>
                        <li>Your area need a mosque,</li>
                        <li>You belong to a charity association</li>
                        <li>You are searching for people to help</li>
                    </ul>
                    <div className="directing-icon">
                        <label htmlFor="email">
                            <DoubleLeftOutlined />
                        </label>
                    </div>
                </div>
            </div>
        );
    }

}
export default SignUp;
