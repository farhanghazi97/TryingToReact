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
