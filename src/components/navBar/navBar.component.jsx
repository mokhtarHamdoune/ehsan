import React ,{Component} from 'react';
import './navBar.style.css';
import open_menu from './open-menu.png';
import close_menu from './close-2.png';
class NavBar extends Component{

    constructor(props){
        super();
        this.state={
            isToggleOn:false
        }
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState({isToggleOn:!this.state.isToggleOn});
    }

    render(){
        return (
            <nav>
                <div className="menu-header">
                    <div className="logo">Ehsan</div>
                    <button className="toggle_btn" onClick={this.handleToggle}>
                         <img src={this.state.isToggleOn ? close_menu : open_menu} alt=""/>
                    </button>
                </div>
                <ul className={`nav-bar ${this.state.isToggleOn ? 'show' : ''}`}>
                    <li className="nav-item active">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#donate">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </nav>
        
        );
    }

}
export default NavBar;