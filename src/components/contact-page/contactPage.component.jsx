import React from 'react';
import './contactPage.style.css';
import ContactForm from '../contact-us-form/contactForm.component';
import LinkButton from '../linkButton/linkButton.component';
import {PhoneOutlined,MailOutlined,EnvironmentOutlined, FileTextOutlined} from '@ant-design/icons';
function ContactPage (props){

    return (
        <div className="contact-container">
            <div className='contact-header'></div>
            <div className='contact-choices'>
                <div className='contact-choice'>
                    <PhoneOutlined style={{fontSize:60,color:'#aaa'}} rotate={100} />
                    <a href="tel:+213659432407">+213659432407</a>
                    <a href="#more_info">more informations</a>
                </div>
                <div className='contact-choice'>
                    <MailOutlined style={{fontSize:60,color:'#aaa'}}/>
                    <LinkButton href='#formulaire' bg_color="link" simpleLink>Email Us</LinkButton>
                </div>
            </div>
            <div className='direct-contact-row' id='more_info'>
                <div className='direct-contact-col'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3487546733786!2d-1.9159446852759001!3d34.92278937879991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU1JzIyLjAiTiAxwrA1NCc0OS41Ilc!5e0!3m2!1sfr!2sdz!4v1606996404616!5m2!1sfr!2sdz"  title='our-locatio' aria-hidden="false" tabIndex="0"></iframe>                </div>
                <div className='direct-contact-col'>
                    <ul className='direct-contact-list' >
                        <li><PhoneOutlined rotate={100} /> Tel:<a href="tel:+213659432407">+213659432407</a></li>
                        <li><FileTextOutlined />Fax:<a href="tel:+213659432407">+213659432407</a> </li>
                        <li><EnvironmentOutlined style={{color:'red'}} /> Adress:075,Houcin Abdelkader, Souani</li>
                        <li><MailOutlined /> Mail: <a href='mail:mokhtardark@gmail.com'>mokhtardark@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='mail-contact' id='formulaire'>
                <ContactForm/>
            </div>
        </div>
    )
}
export default ContactPage;