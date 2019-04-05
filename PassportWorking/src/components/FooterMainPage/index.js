import React from "react";
import facebookImg from "../../assets/img/navlinks/icons8-facebook-48.png"
import linkedinImg from "../../assets/img/navlinks/icons8-linkedin-48.png"
import twitterImg from "../../assets/img/navlinks/icons8-twitter-48.png"
import { Button, Card, Row, Col } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'

function Footer(){
    return(
        
 <footer className="page-footer teal">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Company Bio</h5>
                    <p className="grey-text text-lighten-4">We at The Se7enth Man are a group web developers just finishing
                        a coding bootcamp at the University of Minnesota. Our team of talented web developers consist
                        of Jered Siriba, Mike Smith, Jeremy Guyton, Dan Casazza, and Logan Keyes. We hope you enjoy your time
                        at The Se7enth Man.</p>

                </div>
                <div className="col l3 s12">

                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">Connect</h5>
                    <ul>
                        <li><a className="white-text" href="#!">Sign out</a></li>
                        <li><a className="white-text" href="#!">Contact us</a></li>
                        <li><a className="white-text" href="https://github.com/logankeyes1212/project3">Github</a></li>
                        <br></br>
                        <li><a href="http://facebook.com"><img src={facebookImg}/></a><a href="http://linkedin.com"><img src={linkedinImg}/></a><a href="http://twitter.com"><img
                                    src={twitterImg}/></a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">Made by The Se7enth Man</div>
        </div>
    </footer>
        
    )
}

export default Footer;