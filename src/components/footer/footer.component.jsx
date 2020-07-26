import React from 'react';
import './footer.style.css';
import {FacebookOutlined,TwitterOutlined,InstagramOutlined,MediumOutlined} from '@ant-design/icons';
const Footer = ()=>{
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-content">
                    <div className="logo">Ehsan</div>
                    <p> We try to bind the people who need help and who want to donate to help them.</p>
                </div>
                <div className="footer-content">
                    <ul className="contact">
                        <li><h3>Contact</h3></li>
                        <li>Tel: 0659432407</li>
                        <li>Fix: 043308405</li>
                        <li>Email: ehsan-comunity@gmail.com</li>
                        <li><address>075, Hocin Abdelkader, Souani</address></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <ul className="linkes">
                        <li><h3>Linkes</h3></li>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#home">Donate</a>
                        </li>
                        <li>
                            <a href="#home">Contact US</a>
                        </li>
                        <li>
                            <a href="#home">About</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <ul>
                        <li><h3>Support us</h3></li>
                        <li><a href="#helpUS">Help Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2020 Ehsan,Inc. All rights reserved</p>
                <ul>
                    <li>
                        <a href="#facebook"><FacebookOutlined style={{ color:'#4267B2'}}/></a>
                    </li>
                    <li>
                        <a href="#facebook"><TwitterOutlined style={{ color:'#1DA1F2'}} /></a>
                    </li>
                    <li>
                        <a href="#facebook"><InstagramOutlined style={{ color:'#C13584'}}/></a>
                    </li>
                    <li>
                        <a href="#facebook"><MediumOutlined  style={{ color:'#000'}}/></a>
                    </li>
                </ul>
            </div>
        </footer>   
    );
}
export default Footer;
