import React, { Component } from 'react';
import { connect } from "react-redux";
import './Contact.css';

class Contact extends Component {

    // local state
    state = {
        email: {
            name: '',
            email_address: '',
            subject: '',
            message: ''
        }
    } 

    handleChange = (event, inputProperty) => {
        console.log('event happened', event.target.value);
        this.setState({
            email: {
                ...this.state.email,
                [inputProperty]: event.target.value,
            }
        }); // end setState
    } // end handleChange

    sendMessage = () => {
        console.log('message sent');
        // sends message to the POST saga
        this.props.dispatch({ type: 'SEND_EMAIL', payload: this.state.email })
        this.setState({
            email: {
                name: '',
                email_address: '',
                subject: '',
                message: ''
            }
        }) // end setState
    } // end sendMessage

  render() { 
      return (
        <div className="App">
            <label htmlFor="senderName">Name</label>
                <input 
                    type="text" 
                    id="senderName" 
                    onChange={(event) => this.handleChange(event, 'name')}/>
                    <br></br>
            <label htmlFor="emailAddress">Email Address</label>
                <input 
                    type="text" 
                    id="emailAddress" 
                    onChange={(event) => this.handleChange(event, 'email_address')}/>
                    <br></br>
            <label htmlFor="subject">Subject</label>
                <input 
                    type="text" 
                    id="subject" 
                    onChange={(event) => this.handleChange(event, 'subject')}/>
                    <br></br>
            <label htmlFor="message">Message</label>
                <textarea 
                    type="text" 
                    id="message" 
                    onChange={(event) => this.handleChange(event, 'message')}/>
                    <br></br>
            <button onClick={this.sendMessage}>Send</button>
        </div>
    );
  }
}

export default connect()(Contact);
