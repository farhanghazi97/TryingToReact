import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export class LifecycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Farhan"
        }
        console.log("LifeCycleA Constructor")
    }
    
    componentDidMount() {
        // This is the ideal place to perform side effects (such as make HTTP requests, 
        // AJAX calls etc) It is invoked immediately after a component and all its children
        // have been rendered to the DOM.
        console.log('LifeCycleA componentDidMount()')
    }

    render() {
        console.log("LifeCycleA render()")
        return (
            <div>
                LifeCycleA
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
