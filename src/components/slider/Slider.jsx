import { React, useState, useEffect } from 'react';
import "./Slider.css";
import SliderElement from './SliderElement';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Slider(props) {
    const width = document.documentElement.clientWidth;
    const documentWithScroll = (width * 0.85) + 30;
    const initialscroll = (width) < 600 ? width * 0.89 : (width * 0.80) + 25;

    const [initialid, setInitialid] = useState(1);
    const [scroll, setscroll] = useState(initialscroll)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.getElementById('slider-container').scrollLeft = scroll
    });
    return (
        <div className="main-container" id="main-container">
            <div className="slider-controls">
                <div className="left-slider-button">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={prev} />
                </div>
                <div className="right-slider-button">
                    <FontAwesomeIcon icon={faChevronRight} onClick={next} />
                </div>
            </div>
            <div className="slider-container" id="slider-container">
                <SliderElement id="slider-1-1" data={{title:"Jhon Wick",subtitle:"Chapter 3 - Parabellum", genres:["Action","Suspense"],length:132}}/>
                <SliderElement id="slider-0" data={{title:"Jhon Wick",subtitle:"Chapter 3 - Parabellum", genres:["Action","Suspense"],length:132}}/>
                <SliderElement id="slider-1" data={{title:"Jhon Wick", genres:["Action","Suspense"],length:120}}/>
                <SliderElement id="slider-2" data={{title:"Jhon Wick", genres:["Action","Suspense"],length:120}}/>
                <SliderElement id="slider-3-3" data={{title:"Jhon Wick", genres:["Action","Suspense"],length:120}}/>
            </div>
            
        </div>
    )
    function next() {
        console.log("slider-" + initialid)
        setscroll(scroll + documentWithScroll);
        document.getElementById('slider-container').scrollLeft = scroll
        if (initialid === 0)
            setscroll(scroll - documentWithScroll * 2);
        // document.getElementById('slider-container').scrollLeft -= document.documentElement.clientWidth*0.75*3;
        setInitialid((initialid + 1) % 3)
    }
    function prev() {
        console.log("slider-" + initialid)
        setscroll(scroll - documentWithScroll);
        document.getElementById('slider-container').scrollLeft -= scroll;
        setInitialid((initialid - 1) % 3)
    }

}
