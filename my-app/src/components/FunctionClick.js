import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked!");
    }

    return (
        <div>
            <h1>Function Click!</h1>
            {/* 
                Note the absence of () around the event handler function.
                This is because we are giving the onClick function a
                reference to another function to handle the event. We are
                not actually making a call to the function 
            */}
            <button onClick={clickHandler}>Click!</button>
        </div>
    )
}

export default FunctionClick
