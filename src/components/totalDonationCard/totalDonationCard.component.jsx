import React from 'react';
import './totalDonationCard.style.css';
import CountUp from 'react-countup';
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
            <div className="total-donation-title">
                <h3>
                    {title} 
                </h3>
            </div>
            <div className="total-donation">
                <h3>
                    <CountUp  end={totalAcronym} duration={5} suffix={symbole+' DA'} />  
                </h3>
            </div>
        </div>
    );

}

export default TotalDonationCard;