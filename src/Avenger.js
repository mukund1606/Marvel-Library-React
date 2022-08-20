import React from 'react'
import "./Avenger.css"

function Avenger(props) {

    return (
        <div className='avenger'>
            <img className="avenger-image" src={props.avenger_data.imageURL} alt={props.avenger_data.imgalt} />
            <h1 className='avenger-name'>{props.avenger_data.name}</h1>
            <h2 className='avenger-charname'>{props.avenger_data.charname}</h2>
        </div>
    )
}

export default Avenger;