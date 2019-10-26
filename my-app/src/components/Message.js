import React, { Component } from 'react';

// Simple example of 'State' in React
class Message extends Component {
    
    constructor(props) {
        // A call needs to be made to the base
        // constructor every time
        super(props)
        this.state = {
            message: 'Welcome visitor!'
        }
        // We bind the event handler to the component in the constructor
        this.changeMessage = this.changeMessage.bind(this)
    }

    // A Class component can have n number of functions
    // that change the state of the component
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {this.changeMessage}>Subscribe!</button>
            </div>       
        )
    }
}

export default Message;