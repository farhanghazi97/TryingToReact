import React, { Component } from 'react';

// Example of a Class Component

// To access props passed into a class component,
// we use the "this" keyword.
class Welcome extends Component {
    render() {
        // Destructuring parameters within function body
        const {name , heroName} = this.props
        return (
            <div>
                <h1>This is a class component!</h1>
                <h4>Hi there, {name}. Or should I call you {heroName}?</h4>
            </div>       
        )
    }
}

export default Welcome;