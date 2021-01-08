import React,{Component} from 'react';
import Header from './components/header/header.component';
import NavBar from './components/navBar/navBar.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import Donate from './components/donate/donate.component';
import SignUp from './components/sign-up/sign-up.component';
import AboutUs from './components/about-us/about-us.component';
import ContactPage from './components/contact-page/contactPage.component';
import UserAccount from './components/user-account/user_account.component';
import PubDetails from './components/pub-details/pub-details.component';
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
    this.handleToggle =  this.handleToggle.bind(this);
  }

  handleLoginChanges(e){
    this.setState({[e.target.name]:e.target.value});
  }

  handleToggle(loginState){
    this.setState({loginOn:loginState});
  }

  render(){
    let {user_name,password,loginOn} = this.state;
    return (
      <div className="App">
        <Header/>
        <NavBar  handleToggle={this.handleToggle}/>
        <Modal title="Login" toggle={loginOn} handleToggle={this.handleToggle} modalWidth='25%' > 
          <form action="" className="login-form">
              <div className='form-row'>
                <FormInput label="User name*" id="user_name" type="text" value={user_name} name="user_name" handleChange={this.handleLoginChanges}/>  
              </div>
              <div className='form-row'>
                <FormInput label="Password*" id="password" type="password" value={password} name="password" handleChange={this.handleLoginChanges} />
              </div>
              <Button type="submit" color="secondary" block><LoginOutlined /> Connextion</Button>
              <hr/>
              <Button type="button" color="link" block><GoogleOutlined /> Connect With google</Button>
              <Button type="button" color="black" block><FacebookFilled /> Connect With Facebook</Button>
          </form>
        </Modal>
        <Switch >
          
          <Route path="/donate" exact>
            <Donate />
          </Route>

          <Route path='/donate/details/:pub_id' component={PubDetails}/>
  
          <Route path="/contact-us" > 
            <ContactPage />
          </Route>
  
          <Route path="/about-us" component={AboutUs} />
  
          <Route path="/sign-up" component={SignUp} />

          
          <Route path='/:user_id' component={UserAccount}/>
  
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
