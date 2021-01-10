import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// const XMLParser = require('react-xml-parser');
// const xml = new XMLParser().parseFromString();    // Assume xmlText contains the example XML
// console.log(xml);
// console.log(xml.getElementsByTagName('Name'));

class USPS extends Component {

    state = {
        shipping: ''
    }
 
   // GET ROUTE
  calculateShipping = () => {
    console.log('GETTING SHIPPING!');

    axios.get('https://secure.shippingapis.com/ShippingAPI.dllAPI=RateV4&amp;XML=')
    .then((response) => {
      console.log('Got the things...', response.data);
      this.setState({
        shipping: response.data
      }) 
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end GET ROUTE

  render() {

    return (
      <div>
        <h2>USPS Shipping</h2>
        <button onClick={this.calculateShipping}>Calculate Shipping</button>
      </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore,
});

export default connect(mapStoreToProps)(USPS);
