import React from "react"
import "./signIn.css";
import { Link } from 'react-router-dom';

export default function SignIn() {

  return(
    <div className="sign">

<form className="form">
  <h6 >UserName </h6><input name="name" type="text"  ></input>
  <h6 >Password </h6><input name="password" type="password"  ></input>
  <Link to="/">
<button id="signin" type="submit">SIGN IN</button></Link>
<Link to="/signUp" id="signup" className="signup">
<p>Don't have an account? Click here</p>
</Link>
</form>

    </div>
  )
}

