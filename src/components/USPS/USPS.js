import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const XMLParser = require('react-xml-parser');
const xml = new XMLParser().parseFromString();    // Assume xmlText contains the example XML

class USPS extends Component {

    state = {
        shipping: ''
    }
 
   // GET ROUTE
  calculateShipping = () => {
    console.log('GETTING SHIPPING!');

    axios.get(`https://secure.shippingapis.com/ShippingAPI.dllAPI=RateV4&amp;XML=
            <RateV4Request USERID="853TOWAN2209">
            <Revision>2</Revision>
            <Package ID="1ST">
                <Service>PRIORITY</Service>
                <ZipOrigination>55127</ZipOrigination>
                <ZipDestination>55407</ZipDestination>
                <Pounds>3</Pounds>
                <Ounces>2</Ounces>
                <Container>VARIABLE</Container>
                <Width>5</Width>
                <Length>7</Length>
                <Height>4</Height>
                </Package>
            </RateV4Request>`)
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
