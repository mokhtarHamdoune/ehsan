import React, { useEffect, useRef, useState } from 'react';
import './my-menu.style.css';
import {EllipsisOutlined} from '@ant-design/icons';
function MyMenu({options,icons}){
    const [isVisible,setVisible] = useState(false);
    const MenuRef = useRef();

    
    //1-useEffect take a call back function as argument  after the component was mounted
    //2-execute this function 
    //3-this function return a clean up function
    //4-whene the state changed the component unmounted and the clean up function called 
    //5-and return to step 2
    useEffect(()=>{
        //I store the node since the first excution of useEffect because 
        //whene the compoent  umounted the reference will be deleted 
        // so  whene the handel executed after a window's click
        //an error happed in the if statment because the node doesn't exist (cause of the unmounted component)
        let node = MenuRef.current;
        //hande click method
        function handleMyMenu(event){
            //cause the onclick event happed on svg icon's parent (MoreOutlined)
            if(event.target !== node.firstChild){
                setVisible(false);
            }
        }
        window.addEventListener("click",handleMyMenu);
        
        return ()=> window.removeEventListener("click",handleMyMenu);
    })



    return(
        <div className='my-menu-container'>
            <EllipsisOutlined  className='my-menu-trigger' ref={MenuRef} onClick={()=>setVisible(!isVisible)} />
            <ul className={`my-menu ${isVisible ? '' : 'is-hidden'}`}>
                {
                    options.map((option,index)=>(<li className='my-menu-option' key={index}>
                        <span className='option-icon'>{icons[index]}</span>
                        <span className='option-text'>{option}</span></li>))
                }
                
            </ul>
        </div>
    )
}
export default MyMenu;