import React from 'react';
import './pub-details.style.css';
import Button from '../button/button.component';
import { CalendarOutlined, DollarOutlined, StarOutlined,FacebookOutlined,InstagramOutlined,TwitterOutlined, YoutubeOutlined,StarFilled } from '@ant-design/icons';
import ProgressBar from '../progress-bar/progressBar.component';
//3d carousel 
import ThreeDCarousel from '../3d-carousel/3d-carousel.component';
//my dummy data
import dummy_data from './dummy-data';
class PubDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            isFaved:false,
            user_pic:{},
            images:[],
            publisher:{},
            progress:{},
            about:{},
            links:{},
            pub_date:''
        };
        console.log(props);
    }
    //fake request just for trying
    componentDidMount(){
        let {pub_id} = this.props.match.params;
        setTimeout(()=>(this.setState(dummy_data[parseInt(pub_id-1)])),200);
    }

    render(){
        const {isFaved,user_pic,images,publisher,progress,about,links,pub_date}=this.state;
        return(
            <div className="pub-details-container">
                <span className='share-date'><CalendarOutlined />{pub_date}</span>
                <div className='pub-details-header'>
                    <div className='publish-info'>
                        <div className='publish-img'>
                            <img src={user_pic.src} alt={user_pic.alt}/>
                        </div>
                        <ul>
                            <li className="publish-full-name">{publisher.user_name}</li>
                            <li className='publish-birth'>{publisher.birth}</li>
                        </ul>
                    </div>
                    <div className='pub-header-options'>
                        <Button type="button" block color={'primary'}><DollarOutlined/> Donate</Button>
                        <Button type="button" block color={'white'} onClick={()=>this.setState({isFaved:!isFaved})} >
                            {isFaved ? <StarFilled/> : <StarOutlined/>} Favorite
                        </Button>
                    </div>
                </div>
                <div className='pub-part'>
                    <h2 className='pub-part-title'>About</h2>
                    <div className="pub-part-row">
                        <div className='pub-part-col'>
                            <ul className='about-publisher-list'>
                                <li className='about-publisher-item'><b>Full name: </b>{publisher.user_name}</li>
                                <li className='about-publisher-item'><b>Birth date: </b> {publisher.birth}</li>
                            </ul>
                        </div>
                        <div className='pub-part-col'>
                            <ul className='about-publisher-list'>
                                <li className='about-publisher-item'><b>Address: </b>{publisher.address}</li>
                                <li className='about-publisher-item'><b>Phone.N: </b>{publisher.phoneN}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pub-part'>
                    <h2 className='pub-part-title'>About Publication</h2>
                    <div className='pub-part-row'>
                        <div className='pub-part-col'>
                            <ProgressBar current={progress.current} goal={progress.goal} donnersNumber={progress.donners} />
                            <div className='pub-option-row'>
                                <Button type="button" block color={'primary'}><DollarOutlined/> Donate</Button>
                                <Button type="button" block color={'white'} onClick={()=>this.setState({isFaved:!isFaved})} >
                                    {isFaved ? <StarFilled/> : <StarOutlined/>} Favorite
                                </Button>
                            </div>
                        </div>
                        <div className='pub-part-col'>
                            <ul className='progressbar-details'>
                                <li><b>Amount needed: </b>{progress.goal}M</li>
                                <li><b>Current amount: </b>{progress.current}M</li>
                                <li><b>The rest: </b>{parseInt(progress.goal)-parseInt(progress.current)}M</li>
                                <li><b>N.of Donations: </b>{progress.donners}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-pub-more">
                        <div className='pub-part-row'>
                            <div className="pub-part-col">
                                <p className='about-pub-text'><b>Title :</b> {about.title}</p>
                            </div>
                            <div className="pub-part-col">
                                <p className='about-pub-text'><b>Type :</b> {about.type}</p>
                            </div>
                        </div>
                        <div className='pub-part-row'>
                            <div className="pub-part-col">
                                <p className='about-pub-text'><b>Status :</b> <span style={{color:`${about.situation}`.toLowerCase(),fontWeight:'bold'}}>{about.situation}</span></p>
                            </div>
                        </div>
                        <div className='pub-part-row'>
                            <div className="pub-part-col">
                                <h4 className='about-pub-text'>Description</h4>
                                <p className='about-pub-desc'>
                                    {about.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pub-part ">
                    <h2 className="pub-part-title">
                        Publication Images
                    </h2>
                    <ThreeDCarousel images={images} />
                </div>
                <div className='pub-part'>
                    <h2 className='pub-part-title'>Social Media Links</h2>
                    <div className='pub-part-row'>
                        <div className="pub-part-col social-media">
                            <FacebookOutlined className='social-media-icon' />
                            {
                                links.facebook ?
                                <a href={links.facebook} target="_blank" rel="noopener noreferrer" className='social-media-link'>
                                    {links.facebook}
                                </a>:
                                <span>none</span>
                            }
                        </div>
                        <div className="pub-part-col social-media">
                            <InstagramOutlined className='social-media-icon'/>
                            {
                                links.instagram ?
                                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className='social-media-link'>
                                    {links.instagram}
                                </a>:
                                <span>none</span>
                            }
                        </div>
                    </div>
                    <div className="pub-part-row">
                        <div className="pub-part-col social-media">
                            <TwitterOutlined className='social-media-icon'/>
                            {
                                links.twitter ?
                                <a href={links.twitter} target="_blank" rel="noopener noreferrer" className='social-media-link'>
                                    {links.twitter}
                                </a>:
                                <span>none</span>
                            }
                        </div>
                        <div className="pub-part-col social-media">
                            <YoutubeOutlined className='social-media-icon'/>
                            {
                                links.youtube ?
                                <a href={links.youtube} target="_blank" rel="noopener noreferrer" className='social-media-link'>
                                    {links.youtube}
                                </a>:
                                <span>none</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default PubDetails;