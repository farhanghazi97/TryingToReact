import React, { Component } from 'react'

export class ClassClick extends Component {
    
    // This is a function but we don't need to put the "function" keyword
    // before the function name because JS implicitly assumes a "function"
    // keyword for any function defined within a class
    clickHandler() {
        console.log("Button clicked!")
    }
    
    render() {
        return (
            <div>
                <h1>Class Click!</h1>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
