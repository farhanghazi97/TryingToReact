import React from 'react'

function Columns() {
    const items = [
        {'id': 10, 'title' : 'Call of Duty - Infinite Warfare'},
        {'id': 12, 'title' : 'Call of Duty - Modern Warfare'}
    ]
    return (
        // React.Fragment is used for rendering tables (used as substitute for <div> tags)
        <React.Fragment>
            <h1>Title</h1>
            {
               items.map(item => (
                   <React.Fragment key={item.id}>
                       <p>{item.title}</p>
                    </React.Fragment>
               ))
            }
        </React.Fragment>
    )
}

export default Columns
