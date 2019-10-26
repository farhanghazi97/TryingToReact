import React from 'react';

// Example of a Functional Component

function Greet(props/*{name , heroName, children} METHOD 1: Destructuring parameters passed from Parent "App" component */) {
    
    // METHOD 2: Destructuring parameters passed from Parent "App" component within function body
    const {name, heroName, children} = props

    // Props are passed from the Parent "App" component to the Child "Greet" component to render
    return (
        // CSS class attribute is called "className" instead
        <div className="greet-div">
            <h1>Hello, {heroName} ! You're real name is {name}</h1>
            {children}
        </div>
    )
}

// This line of code allows us to import this 
// component in another file and give it any name
export default Greet;

// ES6 standard using arrow functions (same as above)
// Appending export means we can only import it as the name of this file

// export const Greet = () => <h1>Hello, Farhan!</h1>
