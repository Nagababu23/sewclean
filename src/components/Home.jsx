import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"

class Home extends Component {
  render(){
    return (
        <div>
            <div className='homecard'>
                <h1>Professional Cleaning Services</h1>
                <h4>Experience the difference with our expert cleaning solutions</h4>
                <button>Book Now</button>
            </div>
        </div>
      );
  }
}
export default Home