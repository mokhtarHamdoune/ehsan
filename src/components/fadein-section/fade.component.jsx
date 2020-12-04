import React,{useEffect, useRef, useState} from  'react';
import './fade.style.css';

function FadeInSection(props){
    const [isVisible,setVisible] = useState(false);
    const domRef = useRef();

    useEffect(()=>{
        let node= domRef.current;
        const observer = new IntersectionObserver((enteries)=>{
            enteries.forEach(entry=>setVisible(entry.isIntersecting));
        });
        observer.observe(node);
        return ()=>observer.unobserve(node);
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