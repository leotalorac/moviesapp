import { React, useState, useEffect } from 'react';
import "./Slider.css";
import SliderElement from './SliderElement';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Slider(props) {
    const width = document.documentElement.clientWidth;
    // const documentWithScroll = (width * 0.85) + 30;
    const documentWithScroll = width<600 ? width*.92 : width*.87;
    const initialscroll = 0;
    const [data, setData] = useState([]);
    const [initialid, setInitialid] = useState(1);
    const [scroll, setscroll] = useState(initialscroll)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        fetch("http://ec2-18-223-186-190.us-east-2.compute.amazonaws.com:8080/v1/demo-service/movies/4400?limit=10&sortParam=rating")
        .then(res => res.json())
        .then(
            (result) => {
                setData(result["content"])
            }
        ).catch(rejected => {
            console.log(rejected);
        });
        document.getElementById('slider-container').scrollLeft = scroll
    },[]);
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
            <div className="slider-container clearfix" id="slider-container">
                {
                    data.map(e=>{
                        return(<SliderElement id={"slider-"+e["id"]} key={"slider-"+e["id"]} data={e} title={e.title}/>)
                    })
                }
            </div>
            
        </div>
    )
    function next() {
        console.log("slider-" + initialid)
        setscroll(scroll + documentWithScroll);
        document.getElementById('slider-container').scrollLeft += documentWithScroll
        if (initialid === 0)
            document.getElementById('slider-container').scrollLeft -= (documentWithScroll*data.length-1)
        // document.getElementById('slider-container').scrollLeft -= document.documentElement.clientWidth*0.75*3;
        setInitialid((initialid + 1) % data.length)
    }
    function prev() {
        console.log("slider-" + initialid)
        setscroll(scroll - documentWithScroll);
        document.getElementById('slider-container').scrollLeft -= scroll;
        setInitialid((initialid - 1) % data.length)
    }

}
