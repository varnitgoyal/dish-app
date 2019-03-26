import React from 'react';
import './dish.css';


const Dish=(props)=>{
    function handleClick(){
        console.log(props.dish.price+" "+props.dish.image);
        
    }
    return(
        <div className="dish_card" onClick={handleClick}>
            <h3>{props.dish.name}</h3>
            <p>{props.dish.desc}</p>
            <p>{props.dish.status}</p>
        </div>
    )
}

export default Dish;