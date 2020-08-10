import React,{useState} from 'react';
import './navBar.style.css';
import open_menu from './open-menu.png';
import close_menu from './close-2.png';
import {Link, useLocation,NavLink} from 'react-router-dom';
import {LoginOutlined} from '@ant-design/icons';
function NavBar (){
    let [toggle,setToggle]=useState(false);
    let {pathname} = useLocation();
    function handleToggle(){
        setToggle(!toggle);
    }
    return (
        <nav>
            <div className="menu-header">
                <div className="logo">Ehsan</div>
                <button className="toggle_btn" onClick={handleToggle}>
                        <img src={toggle ? close_menu : open_menu} alt=""/>
                </button>
            </div>
            <ul className={`nav-bar ${toggle ? 'show-nav' : ''}`}>
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
                    <a href="#login">Login <LoginOutlined/></a>
                    <Link to="/sign-up" className={pathname==='/sign-up' ? 'active':'' }>Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;