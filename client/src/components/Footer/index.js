import React from "react";
import facebookImg from "../img/navlinks/icons8-facebook-48.png"
import linkedinImg from "../img/navlinks/icons8-linkedin-48.png"
import twitterImg from "../img/navlinks/icons8-twitter-48.png"

function Footer(){
    return(
        <>
 <footer class="page-footer teal">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Company Bio</h5>
                    <p class="grey-text text-lighten-4">We at The Se7enth Man are a group web developers just finishing
                        a coding bootcamp at the University of Minnesota. Our team of talented web developers consist
                        of Jered, Mike Smith, Jeremy Guyton, Dan Casazza, and Logan Keyes. We hope you enjoy your time
                        at The Se7enth Man.</p>

                </div>
                <div class="col l3 s12">

                </div>
                <div class="col l3 s12">
                    <h5 class="white-text">Connect</h5>
                    <ul>
                        <li><a class="white-text" href="#!">Sign out</a></li>
                        <li><a class="white-text" href="#!">Contact us</a></li>
                        <li><a class="white-text" href="https://github.com/logankeyes1212/project3">Github</a></li>
                        <br></br>
                        <li><a href="http://facebook.com"><img src={facebookImg}/></a><a href="http://linkedin.com"><img src={linkedinImg}/></a><a href="http://twitter.com"><img
                                    src={twitterImg}/></a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">Made by The Se7enth Man</div>
        </div>
    </footer>
        </>
    )
}

export default Footer;