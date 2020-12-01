import React from 'react';
import CountUp from 'react-countup';
import './about-us.style.css';
import LinkButton from '../linkButton/linkButton.component'
import students from '../../images/student-1.jpg';
import howImg from '../../images/how.jpg';
import ToGether from '../../images/together.jpg';
import {UserOutlined,CodeOutlined,CoffeeOutlined,SearchOutlined,CheckCircleOutlined} from '@ant-design/icons';
function AboutUs (){

    return (
        <div className='about-container'>
            <div className='perso-info-row'>
                <div className='perso-info-col'>
                    <img src={students} alt="students around the table "/>
                </div>
                <div className='perso-info-col'>
                        <h1>Who We Are ?</h1>
                        <p>
                            We are students of the university of abou bekr belkaid Tlemcen 
                            who have the ambition to make our country better 
                            by binding the people who want to help and the people who need help.
                        </p>
                </div>
            </div>
            <div className='perso-info-row reverse-perso-info-col'>
                <div className='perso-info-col'>
                    <img src={howImg} alt="Interogative mark"/>
                </div>
                <div className='perso-info-col'>
                    <h1>Where did the idea come from ?</h1>
                    <p>
                        We see these days a lot of people need  money for a surgery or building a Mosque in the area ...
                        and they don't have a platform to share that so we think that this platform will help them to acheve that.
                    </p>
                </div>
            </div>
            <div className="fun-facts-container">
                <h2>Some Facts</h2>
                <div className='fun-facts-row'>
                    <div className="fun-facts-col">
                        <h3>Users <UserOutlined/></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                    <div className="fun-facts-col">
                        <h3>Solved Problems <CheckCircleOutlined /></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                    <div className="fun-facts-col">
                        <h3>Problems not solved <SearchOutlined /></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                </div>
            </div>
            <div className="fun-facts-container">
                <h2>Some Fun facts</h2>
                <div className='fun-facts-row'>
                    <div className="fun-facts-col">
                        <h3>Contributor <UserOutlined/></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                    <div className="fun-facts-col">
                        <h3>Hours of developping <CodeOutlined/></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                    <div className="fun-facts-col">
                        <h3>Cup of Coffees <CoffeeOutlined/></h3>
                        <span className="fun-facts-counter">
                            <CountUp  end={1111} duration={5}  />
                        </span>
                    </div>
                </div>
            </div>
            <div className='perso-info-row'>
                <div className='perso-info-col'>
                    <img src={ToGether} alt="black black the text to gether is the way"/>  
                </div>
                <div className='perso-info-col'>
                    <h1>Do you want to help us ?</h1>
                    <p>
                       If you have any idea that can help us to develope this website  you are welcome,
                        click bellow to contact us. 
                    </p>
                    <LinkButton href="/contact-us" bg_color={'primary'}>Contact US </LinkButton>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;