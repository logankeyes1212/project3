import React from "react";
import facebookImg from "../img/navlinks/icons8-facebook-48.png"
import linkedinImg from "../img/navlinks/icons8-linkedin-48.png"
import twitterImg from "../img/navlinks/icons8-twitter-48.png"
import logoSmall from "../img/logo/logoSmall.png"


function NavLogin() {
    return (
        <>
        <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" className="brand-logo"><h5><img  src={logoSmall} alt="our logo"></img>The Se7enth Man</h5></a>
          <ul className="right hide-on-med-and-down">
            {/* <!-- nav controls --> */}
            <li><a href="#about">About Us</a></li>
                <li>
                    {/* <!-- Modal Button --> */}
                    <div id="loginClick">
                        <a class="modal-trigger" href="#modal1" id="loginClick">Login</a>
                    </div>
                    {/* <!-- Modal Body --> */}
                    <div id="loginModal"></div>
                </li>
                <li>
                    {/* <!-- Modal Button --> */}
                    <div id="signUpClick">
                        <a class="modal-trigger" href="#modal2" id="signUpClick">Sign up</a>
                    </div>
                    {/* <!-- Modal Body --> */}
                    <div id="signUpModal"></div>
                </li>
            <li><a href="http://facebook.com"><img src={facebookImg} alt="facebook"/></a></li>
            <li><a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin"/></a></li>
            <li><a href="http://twitter.com"><img src={twitterImg} alt="twitter"/></a></li> 
          </ul>
          {/* <!-- mobile nav control --> */}
          <ul id="nav-mobile" className="sidenav">
          
          <li><a href="#about">About Us</a></li>
                <li>
                    {/* <!-- Modal Button --> */}
                    <div id="loginClick">
                        <a class="modal-trigger" href="#modal1" id="loginClick">Login</a>
                    </div>
                    {/* <!-- Modal Body --> */}
                    <div id="loginModal"></div>
                </li>
                <li>
                    {/* <!-- Modal Button --> */}
                    <div id="signUpClick">
                        <a class="modal-trigger" href="#modal2" id="signUpClick">Login</a>
                    </div>
                    {/* <!-- Modal Body --> */}
                    <div id="signUpModal"></div>
                </li>
            <li>
              <a href="http://facebook.com"><img src={facebookImg} alt="bookface"/></a>
              <a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin"/></a>
              <a href="http://twitter.com"><img src={twitterImg} alt="twitter"/></a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      </>
    );
}

export default NavLogin;