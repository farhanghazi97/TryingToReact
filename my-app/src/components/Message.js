import React, { Component } from 'react';

// Simple example of 'State' in React using class components
class Message extends Component {
    
    // The constructor is special function that gets called whenever
    // a new component is created. It is used to initialize component
    // state and binding event handlers. 
    constructor(props) {
        
        // A call needs to be made to the base class
        // constructor every time
        super(props)
        this.state = {
            message: 'Welcome visitor!'
        }
        
        // We bind the event handler to the component in the constructor
        this.changeMessage = this.changeMessage.bind(this)
    }

    componentDidMount() {
        // This is the ideal place to perform side effects (such as make HTTP requests, 
        // AJAX calls etc) It is invoked immediately after a component and all its children
        // have been rendered to the DOM.
    }

    // A Class component can have n number of functions
    // that change the state of the component
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }
    
    // The render() method is the only required method that needs to
    // be implemented by both React Funcional and Class components.
    // It reads props and state and returns JSX.
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