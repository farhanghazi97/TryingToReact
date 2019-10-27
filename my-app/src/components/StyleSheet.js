import React from 'react'
import './Styles.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
            <h1 style={heading}>Inline Styling</h1>
            <h1 className='error'>Error!</h1>
        </div>
    )
}

export default StyleSheet
