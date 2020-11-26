import React,{Component} from 'react';
import './navBar.style.css';
import open_menu from './open-menu.png';
import close_menu from './close-2.png';
import {NavLink} from 'react-router-dom';
import {LoginOutlined} from '@ant-design/icons';
class  NavBar extends Component{
    constructor(){
        super();
        this.state={
            toggle:false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState({toggle:!this.state.toggle});
    }
    render(){
        return (
            <nav>
                <div className="menu-header">
                    <div className="logo">Ehsan</div>
                    <button className="toggle_btn" onClick={this.handleToggle}>
                            <img src={this.state.toggle ? close_menu : open_menu} alt=""/>
                    </button>
                </div>
                <ul className={`nav-bar ${this.state.toggle ? 'show-nav' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/donate" activeClassName="active">Donate</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        {/*i add prevent default # in url*/}
                        <a href="#login" onClick={(e)=>{e.preventDefault();return this.props.handleLoginToggle(true)}}>Login <LoginOutlined/></a>
                        <NavLink to="/sign-up" activeClassName="active">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default NavBar;