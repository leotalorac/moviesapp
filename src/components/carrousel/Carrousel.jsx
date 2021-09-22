import {React,useState} from 'react'
import "./Carrousel.css"
import CarrouselElement from './CarrouselElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Carrousel(props) {
    const width = document.documentElement.clientWidth;
    const documentWithScroll = 270;
    const initialscroll = 0;

    const [initialid, setInitialid] = useState(1);
    const [scroll, setscroll] = useState(initialscroll)
    return (
        <div>
            <div className="carrousel-header">
                <h2 className="carrousel-title">{props.title}</h2>
                <div className="carrousel-buttons">
                    <FontAwesomeIcon icon={faChevronLeft} className="carrousel-button" onClick={prev}/>
                    <FontAwesomeIcon icon={faChevronRight} className="carrousel-button" onClick={next}/>
                </div>
            </div>
            <div className="carrousel-container" id={`carrousel-${props.title}`} >
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
                <CarrouselElement />
            </div>
        </div>
    )
    function next() {
        console.log("slider-" + initialid)
        setscroll(scroll + documentWithScroll);
        document.getElementById(`carrousel-${props.title}`).scrollLeft = scroll
    }
    function prev() {
        console.log("slider-" + initialid)
        if(scroll!=0) {
            setscroll(scroll - documentWithScroll);
            document.getElementById(`carrousel-${props.title}`).scrollLeft = scroll
        }
    }
}

