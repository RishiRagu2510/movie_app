import React, { useEffect, useState } from "react";
import MovieContent from "../components/MovieContent";
import MovieData from "../components/MovieData";
import PlayBtn from "../components/PlayBtn";
import bgImg from '../images/bg-transformer.jpg';
import './banner.css';

function Banner(){
  const[movies,setMovies]=useState([]);

  const fetchData=()=>{
    fetch('https://localhost:3000/data/movieData.json')
    .then(res=>res.json())
    .then(data=>setMovies(data))
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
  fetchData()
  },[])

  return (
    <div className="banner">
    <div className="movie">
      <img src={bgImg} alt="Background Image" className="bgImg active" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <MovieContent/>
          </div>
          <div className="col-lg-6 col-md-12">
            <MovieData/>
            <PlayBtn/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Banner;