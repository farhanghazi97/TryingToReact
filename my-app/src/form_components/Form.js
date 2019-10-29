import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            comments: "",
            topic: "react"
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleCommentsChange = this.handleCommentsChange.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} - ${this.state.comments} - ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>React Form Example</h1>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={this.handleUsernameChange}></input>
                        <p>{username}</p>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={comments} onChange={this.handleCommentsChange}></textarea>  
                        <p>{comments}</p>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                        <p>You selected {topic}!</p>
                    </div>
                    <button type="submit">Submit!</button>
                </div>
            </form>
        )
    }
}

export default Form
