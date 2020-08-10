import React from 'react';
import FormInput from '../FormInput/form-input.component';
import Button from '../button/button.component';
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
                            <FormInput label="Email" id="email" type="email" name="email" value={email}  handleChange={this.handleChange} />
                            <FormInput label="User name" id="user_name" type="text" name="user_name" value={user_name} handleChange={this.handleChange} />
                            <FormInput label="Password" id="password" type="password" name="password" value={password} handleChange={this.handleChange}/>
                            <Button type="submit" color='secondary'>Connextion</Button>
                        </form>
                    </div>
                </div>
                <div className="sign-up-right">
                    <h1>Ehsan</h1>
                </div>
            </div>
        );
    }

}
export default SignUp;
