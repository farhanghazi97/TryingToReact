import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h1>Child-Parent Communication Using Methods as Props</h1>
            {/* 
                The parameters passed to the arrow function (string 'Child')
                channel back to the Parent Component (freakin awesome btw)
                which can be accessed by the Parent in the Parent Component
                (see ParentComponent.js)
            */}
            <button onClick={() => props.greetHandler('Child')}>Greet Parent!</button>
        </div>
    )
}

export default ChildComponent
