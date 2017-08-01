import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './About';
import BaseLayout from './BaseLayout';
import Clothes from './Clothes';
import ComicBooks from './ComicBooks';
import Contact from './Contact';
import Home from './Home';
import Toys from './Toys';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <div className="Display">
            <Route exact path="/" component={Home} />
            <Route exact path="/About"
            component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Clothes" component={Clothes} />
            <Route exact path="/ComicBooks" component={ComicBooks} />
            <Route exact path="/Toys" component={Toys} />

          </div>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
