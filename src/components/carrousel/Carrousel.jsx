import {React,useState,useEffect} from 'react'
import "./Carrousel.css"
import CarrouselElement from './CarrouselElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Carrousel(props) {
    
    const documentWithScroll = 270;
    const initialscroll = 0;
    const [data, setData] = useState([]);
    const [initialid, setInitialid] = useState(1);
    const [scroll, setscroll] = useState(initialscroll);
    useEffect(() => {
        // Update the document title using the browser API
        fetch(`http://ec2-18-223-186-190.us-east-2.compute.amazonaws.com:8080/v1/demo-service/movies/0?${props.filter}&limit=20&sortParam=title`)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result["content"])
                }
            ).catch(rejected => {
                console.log(rejected);
            });
    }, [])
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
                {
                    data.map(e=>{
                        return (<CarrouselElement data={e} key={`carrousel-element-${e["id"]}`}/>);
                    })
                }                
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
        if(scroll!==0) {
            setscroll(scroll - documentWithScroll);
            document.getElementById(`carrousel-${props.title}`).scrollLeft = scroll
        }
    }
}

