import React from 'react';
import './progressBar.style.css';
import {Line} from 'rc-progress';

const ProgressBar = ({current,goal,donnersNumber,})=>{
    return (
        <div className="progress-container">
            <div className="top-of-progress">
                <span>{current}M DA</span>
                <span>Raise of</span>
                <span>{goal}M DA</span>
            </div>
            <Line percent={(parseInt(current)*100)/parseInt(goal)} strokeWidth="7" trailWidth="7" strokeLinecap="square"  strokeColor="#058f58"/>
            <div className="bottom-of-progress">
                <span>{donnersNumber} donation</span>
                <span>{parseInt(goal)-parseInt(current)}MDA To Go</span>
            </div>
        </div>
    )
}

export default ProgressBar;