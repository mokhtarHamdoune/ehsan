import React,{Component} from 'react';
import Publication from '../publication/publication.component';
import Search from '../search_bar/search_bar.component';
import publications from './data';
import './donate.style.css';



export default class Donate extends Component{
    constructor(){
        super();
        this.state={
            isAlmostGoal:false,
            type:[],
            wilaya:[],
            status:''
        }
        this.handleSelectChange=this.handleSelectChange.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleSelectChange(selectId,selectedOptions){
            selectedOptions === null ?
            selectId === 'status' ? this.setState({status:''}):this.setState({[selectId]:[]}):
            selectId === 'status' ? this.setState({status:selectedOptions.value}):
            this.setState({[selectId]:selectedOptions.map(selectedOption=>selectedOption.value)});
    }
    handleInputChange(event){
        console.log(event.target);
        this.setState({isAlmostGoal:!this.state.isAlmostGoal});
    }
    render(){
        let {isAlmostGoal} = this.state;
        return(
            <div className="donate-container">
                <Search 
                handleSelectChange={this.handleSelectChange} 
                handleInputChange={this.handleInputChange}
                isAlmostGoal={isAlmostGoal}/>
                {
                    publications.map(publication=><Publication key={publication.id} publication={publication}/>)
                }
            </div>
        );
    }
}