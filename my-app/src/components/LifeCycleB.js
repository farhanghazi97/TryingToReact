import React, { Component } from 'react'

export class LifecycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Farhan"
        }
        console.log("LifeCycleB Constructor")
    }
    
    componentDidMount() {
        // This is the ideal place to perform side effects (such as make HTTP requests, 
        // AJAX calls etc) It is invoked immediately after a component and all its children
        // have been rendered to the DOM.
        console.log('LifeCycleB componentDidMount()')
    }

    render() {
        console.log("LifeCycleB render()")
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifecycleB
