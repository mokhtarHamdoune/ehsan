import React from 'react';
import './my-pubs.style.css';
//this is my dammy data
import publications from '../donate/data';
import Publication from '../publication_v2/publication.component';

class MyPubsPage extends React.Component{

    render(){
        return (
            <div className='my-pubs-container'>
                {
                    publications.map(pub=><Publication publication={pub} key={pub.id} myPubBody />)
                }
            </div>
        )
    }
}

export default MyPubsPage;