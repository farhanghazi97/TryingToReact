import React, { Component } from 'react'

class EventBind extends Component {
    
    // Whenever an EVENT HANDLER has to update a 
    // component's state, simply using the 
    // setState() method is not enough.

    // This is where EVENT BINDING comes in.
    // Event binding "binds" event handlers
    // to the state of a component

    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        // #3 - Binding event handlers in constructor
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
        
        // The below code throws an error
        // if the handler has not been
        // binded to the state

        // The 1st approach to solving this issue, 
        // is to bind the event handler to the 
        // state in the render() method (seen below)

        // The 2nd approach is to bind the handler
        // using arrow functions in the render()
        // method (see below #2)

        // The 3rd approach (recommended by React Docs)
        // is to bind the handler in the CONSTRUCTOR
        // as opposed to binding it in the render()
        // method (see above and below #3)

        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <h1>Event Binding Example!</h1>
                <div>{this.state.message}</div>
                {/* #1 - <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
                {/* #2 - <button onClick={() => this.clickHandler()}>Click Me!</button> */}
                {/* #3 */} <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default EventBind
