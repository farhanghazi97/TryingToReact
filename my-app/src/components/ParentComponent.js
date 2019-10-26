import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

// So far, we have dealt with props being passed
// from Parent Components to the Child Components
// What if the Child Components need to communicate with
// and send data back to the Parent Component? This 
// "reverse binding" is done via the process of 
// passing Parent methods as props to the Child Component.

// The Child Components can then simply trigger 
// functions within the Parent Component by
// accessing them via the props passed to them (as
// well as pass data back to them!)

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }
        // Binding "alert" event handler to component
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName}! This is your ${childName} speaking!`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
