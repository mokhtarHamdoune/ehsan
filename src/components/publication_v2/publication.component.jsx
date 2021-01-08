import React from 'react';
import Carousel from '../carousel/carousel.component';
import Button from '../button/button.component';
import {Line} from 'rc-progress';
import LinkButton from '../linkButton/linkButton.component';
import {DollarCircleOutlined, InfoCircleOutlined,DeleteOutlined,EditOutlined} from '@ant-design/icons';
import MyMenu from '../my-menu/my-menu.compoent';
import FadeSection from '../fadein-section/fade.component'
// //css style
import './publication.style.css';
// //reoct router
import { useRouteMatch } from 'react-router-dom';

const Publication = ({publication,menuOptions,myPubBody})=>{
    let {url} = useRouteMatch();
    return (
        <FadeSection>
            <div className="pub">
                <div className='pub-header'>
                    <div className='publisher-info'>
                        <div className='publisher-sm-pic'>
                            <img src={publication.user_pic.src} alt={publication.user_pic.alt}/>
                        </div>
                        <ul>
                            <li className='publisher_user_name'>{publication.publisher.user_name}</li>
                            <li className='pub_date'>{publication.pub_date}</li>
                        </ul>
                    </div>
                    <div className='donate-btn'>
                        <Button type="button" block color={'primary'}>Donate Now <DollarCircleOutlined/></Button>
                    </div>
                    <MyMenu options={['Edit','Delete','Details']} icons={[<EditOutlined/>,<DeleteOutlined/>,<InfoCircleOutlined/>]} />  
                </div>
                <div className={`pub-body ${myPubBody ? 'my-pub-body':''}`}>
                    <div className="pub-left-side">
                        <Carousel images={publication.images}/>
                    </div>
                    <div className="pub-right-side">
                        <div className="progress-container">
                            <div className="top-of-progress">
                                <span>{publication.progress.current}M DA</span>
                                <span>Raise of</span>
                                <span>{publication.progress.goal}M DA</span>
                            </div>
                            <Line percent={(parseInt(publication.progress.current)*100)/parseInt(publication.progress.goal)} strokeWidth="7" trailWidth="7" strokeLinecap="square"  strokeColor="#058f58"/>
                            <div className="bottom-of-progress">
                                <span>{publication.progress.donners} donation</span>
                                <span>{parseInt(publication.progress.goal)-parseInt(publication.progress.current)}MDA To Go</span>
                            </div>
                        </div>
                        <div className="about-pub-container">
                            <div className="about-publisher">
                                <h4 className="about-pub-title">About Publisher</h4>
                                <ul  className="abou-pub-list">
                                    <li><b>Full name :</b> {publication.publisher.user_name}</li>
                                    <li><b>Birth :</b> {publication.publisher.birth}</li>
                                    <li><b>Address :</b><address>{publication.publisher.address}</address></li>
                                </ul>
                                <div className="more-details-btn">
                                    <LinkButton href={`${url}/details/${publication.id}`} bg_color="secondary">More Details <InfoCircleOutlined/></LinkButton>
                                </div>
                            </div>
                            <div className="about-publication">
                                <h4 className="about-pub-title">About Publication</h4>
                                <ul className="abou-pub-list">
                                    <li><b>Type :</b> {publication.about.type}</li>
                                    <li><b>Situation :</b><span className={`situation 
                                    ${
                                        publication.about.situation === 'Red' ? 'danger-sit': 
                                        publication.about.situation === 'Yellow' ? 'warning-sit' :'success-sit'
                                    }`}>{publication.about.situation }</span></li>
                                    <li><b>Pub Date :</b>{publication.about.pub_date}</li>
                                    <li><b>Pub Heure :</b>  {publication.about.pub_hour}</li>
                                </ul>
                                <LinkButton href={`${url}/details/${publication.id}`} bg_color="secondary" rounded>Details <InfoCircleOutlined/></LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeSection>
    )
}
export default Publication;