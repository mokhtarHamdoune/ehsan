import React,{Component} from 'react';
import './home.style.css';
import ContentHeading from '../contentHeading/contentHeading.component';
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

class Content extends Component{

    constructor(props) {
        super(props);
        this.state = {
            width: 0 
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
    this.setState({ width: window.innerWidth});
    }

    
    render(){

        return (
            <div className="main-container">
                <ContentHeading />
                <div className="carousels">
                    <div className="main-carousel">
                        <Carousel images={[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}]} height={this.state.width > 768 ?'504px':'250px'} >
                            Help the children and their parents who dream of a house or suffers
                            from health problems and need money to do therapy or a surgery
                        </Carousel>
                    </div>
                    <div className="secondary-carousels">
                        <Carousel images={[{src:mosque1,alt:'Ketchoua mosque'},{src:mosque2,alt:'A mosquein in the process of building'}]} height={'250px'}>
                            Help the building process of Allah houses anywhere In our great country or even in other places in this world
                        </Carousel>
                        <Carousel images={[{src:charity_comunity1,alt:'charity comunity for children'},{src:charity_comunity2,alt:'charity comunity for any thing'},{src:charity_donate,alt:'Man hold a paper said donate'}]} height={'250px'} >
                            You can help the charities to grow and facilitate their operations 
                            to help people from the homeless, children, elderly, and more.
                        </Carousel>
                    </div>
                </div>
                <div className="total-donations-container">
                    <h2>Total Donation</h2>
                    <div className="total-donations">
                        <TotalDonationCard title={'People'} total={1000} />
                        <TotalDonationCard title={'Mosque'} total={9999}  />
                        <TotalDonationCard title={'Charities'} total={110999}  />
                        <TotalDonationCard title={'Dinars Donated'} total={1000+9999+110999}  />
                    </div>
                </div>
                <div className="top-willayas-container">
                    <h2>Top Willayas donation</h2>
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

export default Content;