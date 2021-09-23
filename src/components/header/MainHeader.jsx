import { React, useEffect, useState } from "react";
import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function MainHeader(props) {

  const history = useHistory();
  const [textval, settextval] = useState("");
  const [data, setdata] = useState([]);
  const update = (e) => {
    settextval(e.target.value);
    console.log(textval);
    if (textval !== "" && textval.length > 3) {
      fetch(
        `http://ec2-18-223-186-190.us-east-2.compute.amazonaws.com:8080/v1/demo-service/movies/0?title=${textval}&limit=5`
      )
        .then((res) => res.json())
        .then((result) => {
          setdata(result["content"]);
        })
        .catch((rejected) => {
          console.log(rejected);
        });
    } else {
      setdata([]);
    }
  };
  return (
    <header>
      <div className="logo-container" onClick={e=> history.push("/")}>
        <img src="./icon.png" alt="logo cinematic" />
      </div>
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            name="search"
            id="searchinput"
            className="search-input"            
            onChange={(e) => update(e)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <div className="search-result">
            {data.map((e) => {
              return (
                <div key={"search" + e.id} className="search-item">
                  <img src={e.image} alt="" />
                  <span>{e.title}</span>
                  <a href={`/${e.id}`} style={{textDecoration:"none",color:"white"}}>Ver mas</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
