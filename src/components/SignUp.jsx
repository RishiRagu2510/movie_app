import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./signUp.css";

export default function SignUp() {

  const[user,setuser]=useState(
    {
      name:"",
      email:"",
      password:"",
      confirm_password:"",
    }
  );

  const handlechange = (event)=>{
  
setuser((prev)=>{
  return {...prev,[event.target.name]:event.target.value}
});
//console.log(user);
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/signup",{...user});
      }catch(err){
        console.log(err);
        }
    };
    
  return(
    <div className="sign">
    
<form className="form">
  <h2 style={{color:"white"}}>UserName :</h2><input name="name" type="text" onChange={handlechange} ></input>
<h2 style={{color:"white"}}>Email :</h2><input name="email" type="text" onChange={handlechange}></input>
<h2 style={{color:"white"}}>Password :</h2><input name="password" type="password" onChange={handlechange} ></input>
<h2 style={{color:"white"}}>Confirm Password :</h2><input name="confirm_password" type="password" onChange={handlechange} ></input>

<button type="submit" onClick={handlesubmit}><Link to="/signin" className="sfc">Sign up</Link></button>
<Link to="/signin" className="sfc">
<h4>I have an already account</h4></Link>
</form>

    </div>
  )
}

