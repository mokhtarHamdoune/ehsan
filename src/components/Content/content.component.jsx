import React,{Component} from 'react';
import './content.style.css';
import ContentHeading from '../contentHeading/contentHeading.component';
import Carousel from '../carousel/carousel.component';
import TotalDonationCard from '../totalDonationCard/totalDonationCard.component';
//images
import charity_comunity1 from '../../images/charity-comunity-1.jpg';
import charity_comunity2 from '../../images/charity-comunity-2.png';
import charity_donate from '../../images/charity-donate.jpg';
import help_people1 from '../../images/help-people-1.jpg';
import help_people3 from '../../images/help-people-3.jpg'
import mosque1 from '../../images/Ketchaoua_Mosque.jpg';
import mosque2 from '../../images/mosque.jpg';
class Content extends Component{

    render(){
        return (
            <div>
                <ContentHeading />
                <div className="carousels">
                    <Carousel images={[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'}]}>
                        Help the children and their parents who dream of a house or suffers
                        from health problems and need money to do therapy or a surgery
                    </Carousel>
                    <Carousel images={[{src:mosque1,alt:'Ketchoua mosque'},{src:mosque2,alt:'A mosquein in the process of building'}]} reverse right>
                        Help the building process of Allah houses anywhere In our great country or even in other places in this world
                    </Carousel>
                    <Carousel images={[{src:charity_comunity1,alt:'charity comunity for children'},{src:charity_comunity2,alt:'charity comunity for any thing'},{src:charity_donate,alt:'Man hold a paper said donate'}]} >
                        You can help the charities to grow and facilitate their operations 
                        to help people from the homeless, children, elderly, and more.
                    </Carousel>
                </div>
                <div className="total-donations-container">
                    <h2>Total Donation</h2>
                    <div className="total-donations">
                        <TotalDonationCard title={'To People'} total={1000} />
                        <TotalDonationCard title={'To Mosque'} total={9999}  />
                        <TotalDonationCard title={'To Charities'} total={110999}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;