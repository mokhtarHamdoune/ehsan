import React from 'react';
import './modal.style.css';

class   Modal extends React.Component{
    
    constructor(){
        super();
        this.modalRef= React.createRef();
    }
    componentDidMount(){
        window.addEventListener('click',(e)=>e.target===this.modalRef.current ? this.props.handleLoginToggle(false) : null);
    }
    componentWillUnmount(){
        window.removeEventListener('click');
    }
    render(){
        let {title,children,toggle,handleLoginToggle} = this.props;
        return (
            <div className="modal"style={toggle ? {display:'block'} : {display:'none'}} ref={this.modalRef}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="dismiss-btn" onClick={()=>handleLoginToggle(false)}>&times;</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

}

export default Modal;