import React, { Component } from 'react'

// Conditional Rendering

// Different parts of a component can be rendered
// based on conditions within code. Here are some
// approaches of how to implement conditional
// rendering in React.

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {

        // METHOD 1: Using if-else statements, we can achieve
        //           conditional rendering (but it is kinda convoluted)
        
        // if(this.state.isLoggedIn) {
        //     return <div><h1>Welcome, Farhan!</h1></div>
        // } else {
        //     return <div><h1>Welcome, Guest!</h1></div>
        // }

        // METHOD 2: Store the JSX to be returned in a
        //           element variable and return based
        //           on some condition being met

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div><h1>Hello, Farhan!</h1></div>
        // } else {
        //     message = <div><h1>Hello, Guest!</h1></div>
        // }
        // return <div>{message}</div>

        // METHOD 3: The limitations of the above methods are 
        //           that no conditional code can be implanted
        //           within JSX-specific code. However, using
        //           the ternary operator (?) allows us to do
        //           exactly that!

        return (
            this.state.isLoggedIn ? <div><h1>Hello, Farhan!</h1></div> 
                                  : <div><h1>Hello, Guest!</h1></div>
        )    
    }
}

export default UserGreeting
