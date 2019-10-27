import React from 'react'
import Person from './Person'

// React List Rendering (Refer to Person.js)
function NameList() {
    // This approach below is acceptable. However, the ideal way to 
    // render a list in React is to refactor the List JSX into a 
    // separate component 
    const persons = [
        {id: 0, name: 'Farhan', age: 21, skill: 'React'},
        {id: 1, name: 'Fidia',  age: 30, skill: 'Angular'},
        {id: 2, name: 'Eesaa',  age:  4, skill: 'Vue'}
    ]
    const names = ['Bruce', 'Clark', ' Diana']
    // const personList = persons.map((person) => <Person key={person.id} person={person} />)
    // The index passed as the second parameter is used as the value for key
    const namesList = names.map((name, index) => <h2 key={index}>{name} - {index}</h2>)
    return (
        <div>
            <h2>List Rendering Example</h2>
            {/* {personList} */}
            {namesList}
        </div>)
}

export default NameList
