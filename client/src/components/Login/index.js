import React from "react";

function Login() {
    return(
        
        <div className="Login">
        <form >
         
          <label>User Name</label>
          <input type="text" data-test="username" />

          <label>Password</label>
          <input type="password" data-test="password"/>

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    )
}

export default Login;