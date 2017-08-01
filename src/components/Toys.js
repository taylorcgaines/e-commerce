import React, { Component } from 'react';
import {toys} from "../data/products"

class Toys extends Component {

  // constructor(props){
  //   super(props)
  //
  //   this.state{
  //
  //   }
  // }

//TODO: FIGURE OUT HOW TO MAP THE ARRAY OF TOY PRODUCTS AND DISPLAY THEM HERE


  // const toyArray = this.props.toys


  render() {
    const toyArray = toys;
    return (
      <div className="ItemContainer">
        <ul>
          {toys.map (function(product, index){
            return <li className="Item" key={product.id}>
            <h2>{product.name}</h2>
            <br/>
            <img src={product.pic}/>
            <br/>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <button>Buy me!</button>
            </li>;
          })}
        </ul>
      </div>
    );
  }

}

export default Toys;
