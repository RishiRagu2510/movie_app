import React from "react";
import titleImg from '../images/transformer-title.png';
import Button from "./Button";
import './movieContent.css';

function MovieContent(){
    return(
        <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title" />
        <h4><span>Year</span>
        <span><i>age</i></span>
        <span>length</span>
        <span>category</span>
        </h4>
        <p>
          Transformers: Rise of the Beasts premiered at Marina Bay Sands in Singapore 
          on May 27, 2023, and was theatrically released in the United States on 
          June 9, 2023, by Paramount Pictures. The film received mixed reviews from critics,
          and grossed $439 million worldwide against a production budget of $195–200 million;
          making the film a finthe franchise
          </p>
          <div className="button">
            <Button/>
          </div>
      </div>
    );
}

export default MovieContent;