import React from "react";
import "./SliderElement.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

export default function SliderElement(props) {
  console.log(props.data.title);
  return (
    <div className="slider-container-element" id={props.id}>
        <img src="./image.jpg" alt="" className={"slider-img-back"}/>
      <div className="slider-info">
          {/*<div className="slider-img">*/}
          {/*    <img src="./image.jpg" alt=""/>*/}
          {/*</div>*/}
        <h3>{props.data.title}</h3>
        <h4>{props.data.subtitle}</h4>
        <p>
          {props.data.genres.join(" | ")} - {Math.round(props.data.length / 60)}
          h {props.data.length % 60}min
        </p>
          <div className="slider-trailer">
              <FontAwesomeIcon icon={faPlayCircle} className="slider-play"/>
              <h4>Play trailer  </h4>
          </div>
      </div>
    </div>
  );
}
