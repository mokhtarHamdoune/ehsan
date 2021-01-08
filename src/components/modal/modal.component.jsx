import React from 'react';
import './modal.style.css';
import Button from '../button/button.component';

class  Modal extends React.Component{
    
    constructor(){
        super();
        this.modalRef= React.createRef();
        this.makeModelDisappear= this.makeModelDisappear.bind(this);
    }
    componentDidMount(){
        window.addEventListener('click',this.makeModelDisappear);
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.makeModelDisappear);
    }

    makeModelDisappear(e){
        if(e.target===this.modalRef.current){
            this.props.handleToggle(false) 
        }
    }
    render(){
        let {title,modalWidth,children,toggle,handleToggle,handleConfirmation} = this.props;
        return (
            <div className="modal"style={toggle ? {display:'block'} : {display:'none'}} ref={this.modalRef}>
                <div className="modal-content" style={{width:modalWidth}}>
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="dismiss-btn" onClick={()=>handleToggle(false)}>&times;</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {
                        handleConfirmation ? 
                        <div className='modal-footer'>
                                <Button type='button' color='secondary' onClick={()=>handleToggle(false)}>Cancel</Button>
                                <Button type='button' color='primary' onClick={()=>handleConfirmation()} >Submit</Button>
                        </div>
                        :''
                    }
                </div>
            </div>
        );
    }

}

export default Modal;