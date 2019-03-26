import React,{Component} from 'react'


class AddDish extends Component{
  
    constructor(props){
        super(props);
        this.state={
            dish:{}
        }
    }
    handleOnChange=(event)=>{
        
        let newDish={};
        newDish[event.target.name]=event.target.value 
    
     this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

    render(){
        return (
            <div class="add-dish">
             <form onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}> 
        
               
              <label>name</label>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.name}  name="name"/>
              <label>description</label>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.desc}  name="desc"/>
              <label>price</label>
              <input  onChange={this.handleOnChange} type="text" value={this.state.dish.price} name="price"/> 
              <label>status</label>
              <input onChange={this.handleOnChange} type="text"  name="status"/>
              <input  type="submit"/>
              </form>
            </div>
          )

        
    }
}




export default AddDish
