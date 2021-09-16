import React from 'react'
import "./CarrouselElement.css"

export default function CarrouselElement(props) {
    return (
        <div className="carrousel-component-container tooltip clearfix" onClick={(e)=> console.log(e)}>
            <div className="tooltiptext">
                <h3>Title</h3>
                <p>Description</p>
            </div>
            <img src="./image.jpg" alt="" className={"carrousel-movie-image"}/>
        </div>
    )
}
