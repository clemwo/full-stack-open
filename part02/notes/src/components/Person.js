import React from 'react'

const Person = ({person, removePerson}) => {
    return (
        <div>
            {person.name}: {person.number} <button onClick={() => removePerson(person.id)}>Remove</button>
        </div>
    )
}

export default Person