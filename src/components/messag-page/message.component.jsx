import React, {useState } from 'react';
import './message.style.css';
import {useParams,useHistory} from 'react-router-dom';

import default_pic from '../../images/user-picture.png';
import {HeartOutlined,HeartFilled,DeleteOutlined} from '@ant-design/icons';
import Modal from '../modal/modal.component';
//my dummy data 
import dummyData from '../list-msgs-page/my-dump-data';
const MessagePage = (props)=>{
    const {msg_id}  = useParams();
    let history = useHistory();
    const [data,setData]=useState(dummyData[parseInt(msg_id)-1]);
    const [modalTrigger,setModalTrigger] = useState(false);

    //for the moment I just have a dummy data 
    //so I just return the page to the list message page without delete any message
    const deleteConfirmation = ()=>{
        setModalTrigger(false);
        history.goBack();
    }

    return (
        <div className='message-container'>
            <Modal  title='Delete Confirmation'
             modalWidth='50%'
              toggle={modalTrigger} 
              handleToggle={(modalState)=>setModalTrigger(modalState)}
              confirmationModal
              handleConfirmation={deleteConfirmation}>
                <h3 className='delete-quest'>Do you want to delete this message ?</h3>
            </Modal>
            <div className='message-header'>
                <div className='about-sender'>
                    <div className='sender-pic'>
                        <img src={default_pic} alt="The sender"/>
                    </div>
                    <ul>
                        <li className="sender-name">{data.full_name}</li>
                        <li className="sender-email">{data.email}</li>
                    </ul>
                </div>
                <div className='message-options'>
                   <span className='send-date'>{data.date}</span>
                   <div className='fav-msg-icon' onClick={()=>setData({id:data.id,full_name:data.full_name,email:data.email,isFaved:!data.isFaved,message:data.message,date:data.date})}>
                       {
                           data.isFaved ? <HeartFilled/> :<HeartOutlined /> 
                       }
                   </div>
                   <div className='delete-msg-icon' onClick={()=>setModalTrigger(true)}>
                        <DeleteOutlined/>
                   </div>
                </div>
            </div>
            <div className='message-body'>
                <p className='message-text'>
                    {data.message}
                </p>
            </div>
        </div>
    )
}
export default MessagePage;