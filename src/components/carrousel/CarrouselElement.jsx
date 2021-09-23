import React from 'react'
import "./CarrouselElement.css"
import { useHistory } from "react-router-dom";


export default function CarrouselElement(props) {
    const history = useHistory();
    return (
        <div className="carrousel-component-container tooltip clearfix" onClick={(e)=> history.push(`/${props.data.id}`)}>
            <div className="tooltiptext">
                <div className="tooltip-text">
                    <h3>{props.data.title}</h3>
                    <p>{props.data.overview}</p>
                </div>
            </div>
            <img src={props.data.image} alt="" className={"carrousel-movie-image"} loading="lazy"/>
        </div>
    )
}
