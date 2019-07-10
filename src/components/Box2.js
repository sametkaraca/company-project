import React from 'react'
import '../App.css'

function Box2(props){
    return( 
            <div className="Box2">
                    <div class="minibox a"></div>
                    <div class="minibox b"></div>
                    <div class="minibox c"></div>
                    <div class="minibox d">
                    <div class="layer">
                    </div>
                        <p>{props.parag}</p>
                    </div>
            </div>
    )
}

export default Box2