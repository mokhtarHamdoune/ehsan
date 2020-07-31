import React,{useState} from  'react';
import './costumList.style.css';
import { CaretUpOutlined,CaretDownOutlined,MinusOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons';
function CostumList({title,willayas}){
    let [toggle,setToggle]=useState(false);

    function handleClick(){
        setToggle(!toggle);
    }
   
    return(
        <div className="costum-list">
            <div className="list-title">
                <h3>{title}</h3>
                <button className={`list-toggle-btn`} onClick={handleClick}>
                    {toggle ? 
                    <MinusCircleOutlined style={{color:'#fff',fontSize:'1.7em'}} /> :
                    <PlusCircleOutlined  style={{color:'#fff',fontSize:'1.7em'}}/>
                    }
                </button>
            </div>
            <ol className={`list-content`} style={{display:toggle ? 'block':''}}>
                {willayas.map((willaya,index)=>{
                    return(
                        <li key={index} className="list-item">
                            <div>
                             <span className="classment-bullet">{index+1}</span>{willaya.name}
                            </div>
                            {   willaya.rank==="none" ? 
                                    <MinusOutlined  style={{color:'gray'}} />:
                                    (willaya.rank==="up" ? 
                                    <CaretUpOutlined style={{color:'green'}} /> :
                                    <CaretDownOutlined  style={{color:'red'}}/>)
                            }
                        </li>
                    )
                })}
                
            </ol>
        </div>
    );
}

export default CostumList;