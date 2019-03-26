import React,{Component} from 'react';
import DishList from '../containers/DishList/DishList';
import './menu.css'



const Menu=(props)=>{
    return (
        <div className="Menu">
            <h1>MENU</h1>
         <DishList/>
        </div>
     
    )
}

export default Menu;