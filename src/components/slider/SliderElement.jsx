import React from "react";
import "./SliderElement.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
export default function SliderElement(props) {
  const history = useHistory();
  console.log(props.data)
  return (
    <div className="slider-container-element" id={props.id} onClick={(e)=>history.push(`/${props.data.id}`)}>
        <img src={props.data.image} alt="" className={"slider-img-back"}/>
      <div className="slider-info">
        <h3>{props.data.title}</h3>
        <h4>{props.data.originalTitle}</h4>
        <p>
          {props.data.genres.join(" | ")} - {Math.round(props.data.runtime / 60)}h {props.data.runtime % 60}min
        </p>
          <div className="slider-trailer" onClick={(e)=>window.open(props.data.trailer, '_blank').focus()}>
              <FontAwesomeIcon icon={faPlayCircle} className="slider-play"/>
              <h4>Play trailer  </h4>
          </div>
      </div>
    </div>
  );
}
