import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        // The state object defines all the attributes 
        // of the component that can be changed/updated
        this.state = {
             count: 0
        }
    }
    
    increment() {
        
        // ALWAYS use setState() method to update 
        // state objects. The setState() method
        // takes 2 parameters - the state object
        // & a callback function

        // Whenever we want to execute code AFTER state has changed,
        // we pass it as a callback function to the setState() method
        
        // this.setState(
        //     // First parameter (state object)
        //     {
        //         count: this.state.count + 1
        //     } ,
        //     // Second parameter (callback function) 
        //     () => {
        //         console.log('CallBack Value' , this.state.count)
        //     }
        // )
        
        // Whenever we want to update the current state based on
        // the previous state, we need to pass a function instead
        // of an object to the setState() method

        this.setState((prevState , props) => ({
            count: prevState.count + 1
        }))
        
        // Within any function, any executable code outside
        // setState() is a synchoronous call. 
        
        // NEVER modify state directly (as below)
        // this.state.count = this.state.count + 1;
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increment!</button>
            </div>
        )
    }
}

export default Counter

 