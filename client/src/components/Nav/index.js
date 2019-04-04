import React from "react";
import facebookImg from "../img/navlinks/icons8-facebook-48.png"
import linkedinImg from "../img/navlinks/icons8-linkedin-48.png"
import twitterImg from "../img/navlinks/icons8-twitter-48.png"


function Nav() {
    return (
        <>
        <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo"><h5>User name goes here</h5></a>
          <ul class="right hide-on-med-and-down">
            {/* <!-- nav controls --> */}
            <li><a href="#leaders">League Leaders</a></li>
            <li><a href="#Resources">Resources</a></li>
            <li><a href="#signOut">Sign out</a></li>
            <li><a href="http://facebook.com"><img src={facebookImg} alt="facebook"/></a></li>
            <li><a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin"/></a></li>
            <li><a href="http://twitter.com"><img src={twitterImg} alt="twitter"/></a></li> 
          </ul>
          {/* <!-- mobile nav control --> */}
          <ul id="nav-mobile" class="sidenav">
            <li><a href="#leaders">League Leaders</a></li>
            <li><a href="#Resources">Resources</a></li>
            <li><a href="#signOut">Sign out</a></li>
            <li>
              <a href="http://facebook.com"><img src="images/navlinks/icons8-facebook-48.png" alt="bookface"/></a>
              <a href="http://linkedin.com"><img src="images/navlinks/icons8-linkedin-48.png" alt="linkedin"/></a>
              <a href="http://twitter.com"><img src="images/navlinks/icons8-twitter-48.png" alt="twitter"/></a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      </>
    );
}

export default Nav;