import React from 'react';
import './totalDonationCard.style.css';
import CountUp from 'react-countup';
import LinkButton from '../linkButton/linkButton.component';
import {Link} from 'react-router-dom';
const  TotalDonationCard = ({title,total})=>{
    let totalAcronym=0,symbole='';
    if( total >= 1000000000){
        totalAcronym=total/1000000000;
        symbole='B';
    }else if( total >= 1000000){
        totalAcronym = total/1000000;
        symbole='M';
    }else if( total >= 1000){
        totalAcronym = total/1000;
        symbole='K';
    }else{
        totalAcronym=total
    }

    return(
        <div className="totalDonationCard">
            <div className="total-donation-header">
                <h3>
                    {title} 
                </h3>
                <div className="total-donation">
                    <h3>
                        <CountUp  end={totalAcronym} duration={5} suffix={symbole+' DA'} />  
                    </h3>
                </div>
            </div>
            <div className="total-donation-body">
                <LinkButton href="/sign-up" bg_color="secondary">Give Now</LinkButton>
                <Link to="/learn-more">Learn More</Link>
            </div>
        </div>
    );

}

export default TotalDonationCard;