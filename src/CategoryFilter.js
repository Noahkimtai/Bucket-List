import React from "react";

export const CategoryFilter =  () => {
    const categories = ['All','Water', 'Land', 'Air','Space']
    return(
        <div>
            {categories.map( el => (<button>{el}</button>))}
        </div>
    );
};