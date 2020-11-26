import React,{Component} from 'react';
import Header from './components/header/header.component';
import NavBar from './components/navBar/navBar.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import Donate from './components/donate/donate.component';
import SignUp from './components/sign-up/sign-up.component';
//login modal
import Modal from './components/modal/modal.component';
import FormInput from './components/FormInput/form-input.component';
import Button from './components/button/button.component';
//react-router-dom
import {Switch,Route} from 'react-router-dom';
import {GoogleOutlined,LoginOutlined, FacebookFilled} from '@ant-design/icons'
import './App.css';

class  App extends Component{
  constructor(){
    super();
    this.state={
      user_name:'',
      password:'',
      loginOn:false
    }
    this.handleLoginChanges= this.handleLoginChanges.bind(this);
    this.handleLoginToggle =  this.handleLoginToggle.bind(this);
  }

  handleLoginChanges(e){
    this.setState({[e.target.name]:e.target.value});
  }

  handleLoginToggle(loginState){
    this.setState({loginOn:loginState});
  }

  render(){
    let {user_name,password,loginOn} = this.state;
    return (
      <div className="App">
        <Header/>
        <NavBar  handleLoginToggle={this.handleLoginToggle}/>
        <Modal title="Login" toggle={loginOn} handleLoginToggle={this.handleLoginToggle}> 
          <form action="" className="login-form">
              <FormInput label="User name*" id="user_name" type="text" value={user_name} name="user_name" handleChange={this.handleLoginChanges}/>  
              <FormInput label="Password*" id="password" type="password" value={password} name="password" handleChange={this.handleLoginChanges} />
              <Button type="submit" className='btn' color="secondary" block><LoginOutlined /> Connextion</Button>
              <hr/>
              <Button type="button" className="btn" color="link" block><GoogleOutlined /> Connect With google</Button>
              <Button type="button" className="btn" color="black" block><FacebookFilled /> Connect With Facebook</Button>
          </form>
        </Modal>
        <Switch >
          
          <Route path="/donate">
            <Donate />
          </Route>
  
          <Route path="/contact-us" />
  
          <Route path="/about-us"  />
  
          <Route path="/sign-up" component={SignUp} />
  
          <Route path="/"> 
              <Home />
          </Route>
  
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
