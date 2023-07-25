import React, { useState } from 'react'
import TickedItems from './TickedItems'

function BucketList(){
    //  create state to hold the input value from the user
    const [inputValue, setInputValue] = useState('')
    //Create state to hold the bucket list items
    const [bucketList, setBucketList] = useState([])
    // create state to hold the completed items
    const [completedItems, setCompletedItems] = useState([])
    // function to handle change in input value from the user

    //control form submit
    const isEnabled = (inputValue !== '')
    
    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }
    //function to handle submition of input value by the user
    const handleAddItem = () =>{
        setBucketList([...bucketList, inputValue])
        setInputValue('')
    }
    // Define function to handle remove from bucket list
    const handleRemove = (item) => {
        // make a copy of the bucketList items
        let updatedBucketList = bucketList.filter((el) => el != item)
        setBucketList(updatedBucketList)
    }
    const handleTick = (item) =>{
        let tickedItem = bucketList.filter((el) => el == item)
        setCompletedItems([...completedItems, tickedItem])
    }
    const categories = ['All','Water', 'Land', 'Air','Space']
    return(
        <div>
            <input type='text' placeholder='Enter bucket list Item' value={inputValue} onChange={handleInputChange}>
            </input>
            <label for='category'> Select Category</label>
            <select name='category' id='category'>
                {categories.map( (el) => (<option value={el}>{el}</option>))}
            </select>
            <button onClick={handleAddItem}>Add to Bucket List</button>
            <ul>
                {bucketList.map((item,index) => (
                    <li key={index}>{item} 
                        <span>Enter Category Here</span>
                        <button onClick={() => handleTick(item)}> Tick off Bucket List</button>
                        <button onClick={() => handleRemove(item)}> Remove </button>
                        <button>Expected Thrill </button>
                    </li>
                ))} 
            </ul>
            <div>
                <TickedItems completedItems={completedItems}/>
            </div>
        </div>

    );

}
export default BucketList;