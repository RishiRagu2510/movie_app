import React from "react"
import "./signIn.css";
import { Link } from 'react-router-dom';
export default function SignIn() {

  return(
    <div className="sign">
    
<form className="form">
  <h2 style={{color:"white"}}>UserName :</h2><input name="name" type="text"  ></input>
  <h2 style={{color:"white"}}>Password :</h2><input name="password" type="password"  ></input>
  <Link to="/">
<button type="submit">SIGN IN</button></Link>
<Link to="/signUp" className="signup">

<h4>dont have an account</h4>
</Link>
</form>

    </div>
  )
}

