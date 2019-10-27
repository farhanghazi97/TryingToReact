import React from 'react';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'

import Form from './form_components/Form'

import './appStyles.css'
import styles from './appStyles.module.css'

import logo from './logo.svg';
import './App.css';


// React Functional Components

// A functionl component is simply a JS function 
// that receives props and returns declarations.
// Aim to use functional components as much as 
// possible

// Advantages

// Absense of the 'this' keyword
// Forced to come up with a solution without state
// Mainly responsible for the UI
// State and lifecycle hooks can also be used in FC

// React Class Components

// Advantages

// More feature rich
// Maintain their own private data (state)
// Used to implement complex UI logic
// Provide lifecycle hooks

// What is JSX?

// Javascript XML (JSX) - an extension to the JS language syntax
// JSX tags have a tag name, attributes, and children
// JSX is not a neccesity to writing React apps but it
// makes your code simpler and more elegant.

// Props vs State

// Props get passed to the component VS state is managed within the component
// Props are immutable VS state can be changed
// Props can be accessed via "props" VS Props are accessed via "this.props" & "this.state"

function App() {
  return (
    <div className="App">
      
      <Greet name="Bruce" heroName="Batman">
        <p>This is a child of the Batman Greet tag</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>This is a button of the Superman Greet tag</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        <a href="www.google.com">This is a child link of Wonder Woman</a>
      </Greet>
      
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      
      <Message />
      <Counter />
      
      <FunctionClick />
      <ClassClick />

      <EventBind />

      <ParentComponent />

      <UserGreeting />

      <NameList />

      <StyleSheet primary={true}/>

      <h1 className='error'>Error!</h1>
      <h1 className={styles.success}>Success!</h1>

      <Form />
    
    </div>
  );
}

export default App;
