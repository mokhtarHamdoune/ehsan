import React,{useState} from 'react';
import './navBar.style.css';
import open_menu from './open-menu.png';
import close_menu from './close-2.png';
import {Link, useLocation} from 'react-router-dom';
import {LoginOutlined} from '@ant-design/icons'
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
                    <Link to="/" className={pathname==='/' ? 'active':'' }>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/donate" className={pathname==='/donate' ? 'active':'' } >Donate</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact-us" className={pathname==='/contact-us' ? 'active':'' } >Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className={pathname==='/about-us' ? 'active':'' }>About Us</Link>
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