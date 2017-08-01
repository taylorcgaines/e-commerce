import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="Item emailform">

      <h2>Contact Me!</h2>

      <label htmlFor="emailname">Who are you?</label>
      <br/>
      <input type="text" name="emailname" />
      <br/>

      <label htmlFor="emailbody">Whatcha wanna say?</label>
      <br/>
      <input type='textarea' name="emailbody"/>
      <br/>
      <button>Send that email!</button>

      </div>
    );
  }

}

export default Contact;
