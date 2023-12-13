import React,{useState,useEffect} from 'react'
import "./banner.css"
function Banner() {
  const [movies,setMovies]=useState([])

  const fetchData=()=>{
    fetch('https://localhost:3000/data/movieData.json')
    .then(res=>res.json())
    .then(data=>setMovies(data))
    .catch(e=>console.log(e.message));
  };
  useEffect(()=>{
    fetchData()
  },[])
  return <div className='banner'>
  <div className='movie'>
    <img src='' alt='Background Image' className='bgImg' />
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-lg-6 col-md-12'>
      <div className='content'>
      <img src="" alt='Movie Title' className='movie-title'/>
      <h4><span>Year</span>
      <span><i>age</i></span>
      <span>length</span>
      <span>category</span>
      </h4>
      <p>The closest thing I have found is the minor assignment, a 
      50-word sentence covering the week’s reading. Employed frequently—I 
      schedule from perhaps four in a typical undergraduate seminar to as many as nine 
      in an upper-division lecture—minor assignments are the most effective means 
      I know for teaching students the quintessential communicative skill: get to the point!
      </p>
      <div className='button'>Button</div>
      </div>
      </div>
      <div className='col-lg-6 col-md-12'>
      
      </div>
    
    </div>
    </div>
    </div>
  </div>;
}

export default Banner