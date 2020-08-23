import React,{Component} from 'react';
import './home.style.css';
import ContentHeading from '../contentHeading/contentHeading.component';
import LinkButton from '../linkButton/linkButton.component';
import Carousel from '../carousel/carousel.component';
import TotalDonationCard from '../totalDonationCard/totalDonationCard.component';
import CostumList from '../costumList/costumList.component';
//images
import charity_comunity1 from '../../images/charity-comunity-1.jpg';
import charity_comunity2 from '../../images/charity-comunity-2.png';
import charity_donate from '../../images/charity-donate.jpg';
import help_people1 from '../../images/help-people-1.jpg';
import help_people3 from '../../images/help-people-3.jpg';
import help_people2 from '../../images/ben-white.jpg';
import mosque1 from '../../images/Ketchaoua_Mosque.jpg';
import mosque2 from '../../images/mosque.jpg';
//map
import AlgeraMap from '../algeria-map/map.component';

import {ArrowRightOutlined,DollarCircleFilled} from '@ant-design/icons';
class Home extends Component{

    
    render(){

        return (
            <div className="main-container">
                <ContentHeading reverse={false}>
                    <p className="">If you are one  of the people who want  to help others who need therapy, money to build a house, or maybe you want to help the charities </p>
                    <LinkButton href="/donate" bg_color="link">Click Here <DollarCircleFilled /></LinkButton>
                </ContentHeading>
                <div className="carousel-container">
                    <div className="carousel-grid">
                        <Carousel images={[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}]}  >
                            Help the children and their parents who dream of a house or suffers
                            from health problems and need money to do therapy or a surgery
                        </Carousel>
                    </div>
                    <div className="carousel-grid">
                        <Carousel images={[{src:mosque1,alt:'Ketchoua mosque'},{src:mosque2,alt:'A mosquein in the process of building'}]}>
                            Help the building process of Allah houses anywhere In our great country or even in other places in this world
                        </Carousel>
                    </div>
                    <div className="carousel-grid">
                        <Carousel images={[{src:charity_comunity1,alt:'charity comunity for children'},{src:charity_comunity2,alt:'charity comunity for any thing'},{src:charity_donate,alt:'Man hold a paper said donate'}]}>
                            You can help the charities to grow and facilitate their operations 
                            to help people from the homeless, children, elderly, and more.
                        </Carousel>
                    </div>
                </div>
                <ContentHeading reverse>
                    <p className="">If you are  the one  who need help ,you  area need a mosque , you belong to charity association</p>
                    <LinkButton href="/sign-up" bg_color="link">Go Here <ArrowRightOutlined /></LinkButton>
                </ContentHeading>
                <div className="total-donations-container">
                    <TotalDonationCard title={'Total Donation for People'} total={1000} />
                    <TotalDonationCard title={'Total Donation for Mosque'} total={9999}  />
                    <TotalDonationCard title={'Total Donation for Charities'} total={110999}  />
                    <TotalDonationCard title={'Dinars Donated'} total={1000+9999+110999}  />
                </div>
                <div className="map-container" >
                    <div className="map-title">
                        <h2>All 48 Willayas donations</h2>
                    </div>
                    <AlgeraMap width='100%' height='500px' data={[{'id':'DZ-16','name':'Alger','value':1000},{'id':'DZ-13','name':'Tlemcen','value':1200}]}/>
                </div>
                <div className="top-willayas-container">
                    <h2>Top 5 Willayas</h2>
                    <div className="top-willayas">
                        <CostumList
                            title={'People'}
                            willayas={[{name:'Algeirs',rank:"up"},{name:'Oran',rank:"up"},{name:'Constantine',rank:"none"},{name:'Annaba',rank:"down"},{name:'Setif',rank:"down"}]}
                        />
                        <CostumList
                            title={'Mosque'}
                            willayas={[{name:'Tlemcen',rank:"up"},{name:'Oran',rank:"up"},{name:'Batna',rank:"none"},{name:'Annaba',rank:"down"},{name:'Algeirs',rank:"down"}]}
                        />
                        <CostumList
                            title={'Charities'}
                            willayas={[{name:'Tlemcen',rank:"up"},{name:'Canstantine',rank:"up"},{name:'Oran',rank:"none"},{name:'Annaba',rank:"down"},{name:'Algeirs',rank:"down"}]}
                        />
                        <CostumList
                            title={'Totale'}
                            willayas={[{name:'Tlemcen',rank:"up"},{name:'Algeirs',rank:"up"},{name:'Setif',rank:"none"},{name:'Annaba',rank:"down"},{name:'Oran',rank:"down"}]}
                        />                      
                    </div>
                </div>
                <div className="block-quote-container"> 
                    <div className="block-quote">
                        <p dir="rtl">قال رسول الله صلى الله عليه وسلم</p>   
                        <blockquote dir="rtl">
                        من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة، ومن يسر على معسر يسر الله عليه في الدنيا والآخرة، ومن ستر مسلماً ستره الله في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه.
                        </blockquote>   
                        <cite>رواه مسلم ، في صحيح مسلم ، عن أبي هريرة</cite>              
                    </div>    
                </div>
            </div>
        );
    }
}

export default Home;