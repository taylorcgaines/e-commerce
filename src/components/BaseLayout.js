import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {

  render() {
    return (
      <div className="Page">
        <div className="MainBody">
          <div className="Layout">
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/comicBooks">Comic Books</NavLink></li>
                <li><NavLink to="/clothes">Clothes</NavLink></li>
                <li><NavLink to="/toys">Toys</NavLink></li>
              </ul>
            </nav>
            <div className="BodyContainer">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="Lady">
        </div>
      </div>
    );
  }

}

export default BaseLayout;
