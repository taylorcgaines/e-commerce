import React, { Component } from 'react';
import {comicbooks} from "../data/products"


class ComicBooks extends Component {

  render() {
      const comicbookArray = comicbooks;
      return (
        <div className="ItemContainer">
          <ul>
            {comicbooks.map (function(product, index){
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

export default ComicBooks;
