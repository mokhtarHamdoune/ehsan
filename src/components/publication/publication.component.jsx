import React from 'react';
import Carousel from '../carousel/carousel.component';
import Button from '../button/button.component';
import {Line} from 'rc-progress';
import LinkButton from '../linkButton/linkButton.component';
import {DollarCircleOutlined, InfoCircleOutlined} from '@ant-design/icons';
// //css style
import './publication.style.css';
// //reoct router
import { useRouteMatch } from 'react-router-dom';

const Publication = ({publication})=>{
    let {path} = useRouteMatch();
    return (
        <div className="pub">
            <div className="pub-left-side">
                <Carousel images={publication.images}/>
                <Button type="button" color={'primary'}><DollarCircleOutlined />Donate Now</Button>
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
                            <li>Name: {publication.publisher.name}</li>
                            <li>Surname: {publication.publisher.surname}</li>
                            <li>Birth: {publication.publisher.birth}</li>
                            <li>Address:<address>{publication.publisher.address}</address></li>
                        </ul>
                        <div className="more-details-btn">
                            <LinkButton href={`${path}/details/${publication.id}`} bg_color="secondary">More Details <InfoCircleOutlined/></LinkButton>
                        </div>
                    </div>
                    <div className="about-publication">
                        <h4 className="about-pub-title">About Publication</h4>
                        <ul className="abou-pub-list">
                            <li>Type: {publication.about.type}</li>
                            <li>Situation: <span className={`situation 
                            ${
                                publication.about.situation === 'Red' ? 'danger-sit': 
                                publication.about.situation === 'Yellow' ? 'warning-sit' :'success-sit'
                            }`}>{publication.about.situation }</span></li>
                            <li>Pub Date: {publication.about.pub_date}</li>
                            <li>Pub Heure: {publication.about.pub_hour}</li>
                        </ul>
                        <LinkButton href={`${path}/details/${publication.id}`} bg_color="secondary">More Details <InfoCircleOutlined/></LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Publication;