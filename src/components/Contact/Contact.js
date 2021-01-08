import { Component } from 'react';
import './Contact.css';

class Contact extends Component {

    state = {
        name: '',
        emailAddress: '',
        subject: '',
        message: ''
    }

    handleChange = (event, inputProperty) => {
        console.log('event happened', event.target.value);
        this.setState({
            [inputProperty]: event.target.value,
        }); // end setState
    } // end handleChange

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
                    onChange={(event) => this.handleChange(event, 'emailAddress')}/>
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
        </div>
    );
  }
}

export default Contact;
