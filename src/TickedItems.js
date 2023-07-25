import React, { useState } from "react";

function TickedItems({completedItems}){
    const[ratings, setRatings] = useState(0)

    const handleRating = (event) => {
        let newRating = parseInt(event.target.value) 
        setRatings(newRating)
    } 
    return(
       <div>
        {completedItems.map((item,index) =>(
            <div key={index}>{item}
                <input type="range" min={0} max={10} step={0.5} onChange={handleRating} placeholder="Experienced Thrill"/>
                <span>{ratings}</span>
            </div>
        ))}
       </div>
    )
};

export default TickedItems