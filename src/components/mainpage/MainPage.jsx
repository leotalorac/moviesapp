import React from 'react'
import Carrousel from "../carrousel/Carrousel";

import MainHeader from "../header/MainHeader";
import MovieInfo from "../movieinfo/MovieInfo";
import Slider from "../slider/Slider";
export default function MainPage(props) {
    return (
        <div>
            <Slider />
            <Carrousel title="Thriller" filter="genres=Thriller" />
            <Carrousel title="Drama" filter="genres=Drama" />
            <Carrousel title="Romance" filter="genres=Romance" />
            <Carrousel title="All" filter="" />
        </div>
    )
}
