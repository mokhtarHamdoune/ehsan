import React from 'react';
import './contactForm.style.css';
import FormInput from '../FormInput/form-input.component';
import Button from '../button/button.component';
import {MailFilled} from '@ant-design/icons'
class ConcactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            surname:'',
            email:''
        }
        this.handelChange=this.handelChange.bind(this);
    }
    handelChange(e){
        let {name,value}= e.target;
        this.setState({[name]:value});
    }
    render(){
        const {name,surname,email}=this.state;
        return (
            <div className='contact-form-row' action="post">
                <div className='contact-form-col'>
                    <h2>Contact Us</h2>
                    <form action="post">
                        <div className='form-row'>
                            <FormInput label={'Name'} type='text' name='name' id='name' value={name} handleChange={this.handelChange}/>
                        </div>
                        <div className='form-row'>
                            <FormInput label={'Surname'} type='text'  name='surname' id='surname' value={surname} handleChange={this.handelChange}/>
                        </div>
                        <div className='form-row'>
                            <FormInput label={'Email'} type='text'  name='email' id='email' value={email} handleChange={this.handelChange}/>
                        </div>
                        <div className='form-row'>
                            <FormInput label='Comment' type='textarea' name='comment' rows={6} id='comment'/>
                        </div>
                        <div className='form-row'>
                            <Button color='secondary' type='submit'>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className='contact-form-col'>
                    <MailFilled style={{fontSize:100}}/>
                    <h2>How Can we help you ?</h2>
                    <p>
                        If you have a question or just want to get in touch,
                        use the form below,
                        we look forward to hear from you.
                    </p>
                </div>
            </div>
        );
    }

}
export default ConcactForm;
