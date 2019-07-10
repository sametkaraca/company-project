import React from 'react'
import '../App.css'

function Box4(props){
    return( 
        <div className="Box4">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <br />
            <p>{props.firstparag}</p>
            <br />
            <p>{props.secondparag}</p>
            <button class="btn info">{props.button}</button>
        </div>
    )
}

export default Box4