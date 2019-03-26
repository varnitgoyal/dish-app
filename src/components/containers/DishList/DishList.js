import React, { Component } from "react";
import fishes from "./SampleDishes";
import Dish from "../../dish/dish";
import AddDish from "../../AddDish/AddDish";
import './DishList.css'

export class DishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: fishes,
    
    };
  }

handleAddDish=(event,dish)=>{
    event.preventDefault();
    console.log(dish);
   
    
     let newFishes=this.state.fishes.slice();
     newFishes.push(dish);
     this.setState({
         fishes:newFishes,
     })

 }
 render() {
    return (
      <div className="dish-list ">
      <div className="dishes">
     
        {
            
            this.state.fishes.map((dish,index) => {
          return <Dish dish={dish} key={index} />;
        })}
        </div>
        <h2>ADD DISH</h2>
        <AddDish handleOnChange={this.handleOnChange} handleAddDish={this.handleAddDish}/>

        
        
      </div>

    );
  }
}

export default DishList;
