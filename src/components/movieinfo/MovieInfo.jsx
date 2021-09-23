import { React, useEffect, useState } from "react";
import "./MovieInfo.css";
import { useParams } from "react-router-dom";
export default function MovieInfo(props) {
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `http://ec2-18-223-186-190.us-east-2.compute.amazonaws.com:8080/v1/demo-service/movie/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="movieinfo-container">
        <div className="movie-image">
          <img src={data.image} alt="" />
        </div>
        <div className="movie-info">
          <h1>{data.title}</h1>
          <h2>Synopsis</h2>
          <p>{data.overview}</p>
          <p>
            {data.genres? data.genres.join(" | ") : ""} - {Math.round(data.runtime / 60)}h{" "}
            {data.runtime % 60}min
          </p>
        </div>
      </div>
      <div className="trailer-container">
          <h2>Trailer</h2>
        <iframe
          className="video-trailer"
          src={data.trailer ? data.trailer.replace("watch?v=", "embed/") :"" }
        ></iframe>
      </div>
    </div>
  );
}
