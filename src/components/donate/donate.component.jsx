import React,{Component} from 'react';
import Publication from '../publication/publication.component';
import './donate.style.css';

import help_people1 from '../../images/help-people-1.jpg';
import help_people3 from '../../images/help-people-3.jpg';
import help_people2 from '../../images/ben-white.jpg';
export default class Donate extends Component{
    constructor(){
        super();
        this.state={
            publication:{
                id:2,
                images:[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}],
                progress:{
                    current:200,
                    goal:300,
                    donners:1200
                },
                publisher:{
                    name:'Mohammed',
                    surname:'Hamdoune',
                    birth:'24-07-1996',
                    address:'075,Houssin Abdelkader,Souani'
                },
                about:{
                    type:'Surgery',
                    situation:'Medium',
                    pub_date:'24-08-2020',
                    pub_hour:'2:38'
                }
            }
        }
    }
    render(){
        return(
            <div className="container">
                <Publication publication={this.state.publication}/>
            </div>
        );
    }
}