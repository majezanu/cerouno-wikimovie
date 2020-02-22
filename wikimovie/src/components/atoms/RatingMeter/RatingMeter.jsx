import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import './RatingMeter.scss';

const RatingMeter = (props) => {
    
    return (
        <div className="meter">
            <ReactSpeedometer value={props.value} maxValue={100} segments={1000}></ReactSpeedometer>
        </div>
        
    )
}

export default RatingMeter