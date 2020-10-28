import React, { Component} from 'react';
import './carousel.style.css';

class  Carousel extends Component{
    constructor(props){
        super(props)
        this.state={
            imgIndex:0,
            numberOfImages:props.images.length,
        }
    }
    componentDidMount(){
        if(this.state.numberOfImages!==0)setInterval(()=>this.slide(),3500);
    }
    componentWillUnmount(){
        clearInterval(this.slide);
    }
    slide(){
        this.setState({imgIndex:(this.state.imgIndex+1)%this.state.numberOfImages});
    }
    render(){
        return(
            <div className={`carousel ${this.props.reverse?'reverse':''} ${this.props.right?'right':''}`}> 
                <div className="carousel-slide">
                    {
                        this.props.images.map((image,index)=><img  key={index} className={index===this.state.imgIndex ? 'fade':''} src={image.src} alt={image.alt} style={{display:index===this.state.imgIndex ? 'block':'none'}}/>)
                    }
                    <div className="slide-indicator">
                        {
                            this.props.images.map((image,index)=><span key={index} className={`dot ${index===this.state.imgIndex ? 'black-dot':''}`}></span>)
                        }
                    </div>
                </div>
                {
                    this.props.children ? 
                    <div className="carousel-content">
                        <p className="presentation">
                            {this.props.children}
                        </p>
                    </div>
                    : ""
                }
            </div>
        );
    }

}

export default Carousel;