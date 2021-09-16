import React from 'react';
import "./MainHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function MainHeader() {
    return (
        <header>
            <div className="logo-container">
                <img src="./icon.png" alt="logo cinematic" />
            </div>
            <div className="search-bar">
                <div className="search">
                    <input type="text" name="search" id="searchinput" className="search-input" 
                    // value="Find Movies or series" 
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>
        </header>
    )
}
