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
