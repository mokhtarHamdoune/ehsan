import React,{useEffect, useRef, useState} from  'react';
import './fade.style.css';

function FadeInSection(props){
    const [isVisible,setVisible] = useState(false);
    const domRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((enteries)=>{
            enteries.forEach(entry=>setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return ()=>observer.unobserve(domRef.current);
    },[]);

    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible': ''}`}>
            {
                props.children
            }
        </div>
    )

}
export default FadeInSection;