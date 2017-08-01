import React, { Component } from 'react';
import {clothes} from "../data/products"

class Clothes extends Component {

  render() {
      const clothesArray = clothes;
      return (
        <div className="ItemContainer">
          <ul>
            {clothes.map (function(product, index){
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

export default Clothes;
