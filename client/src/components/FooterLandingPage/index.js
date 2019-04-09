import React, { Component }from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import facebookImg from "../../assets/img/navlinks/icons8-facebook-48.png";
import linkedinImg from "../../assets/img/navlinks/icons8-linkedin-48.png";
import twitterImg from "../../assets/img/navlinks/icons8-twitter-48.png";
import logoLarge from "../../assets/img/logo/logoLarge.png";
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';

class FooterHome extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        


    return (

        <footer className="page-footer teal" id="bio">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Company Bio</h5>
                        <p className="grey-text text-lighten-4">We at The Se7enth Man are a group web developers just finishing
                            a coding bootcamp at the University of Minnesota. Our team of talented web developers consist
                            of Jared Siriba, Mike Smith, Jeremy Guyton, Dan Casazza, and Logan Keyes. We hope you enjoy your time
                        at The Se7enth Man.</p>

                    </div>
                    <div className="col l3 s12">
                    <img src={logoLarge} alt="logo"/>

                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul>
                            <li>
                            <Link to="/login" >
                                <span className="white-text">login</span>
                            </Link>
                            </li>
                            <li>
                            <Link to="/signup" >
                                <span className="white-text">sign up</span>
                            </Link>
                            </li>
                            <li><a className="white-text" href="https://templates.underconstructionpage.com/?ucp_template_preview&template=vacation">Contact us</a></li>
                            <li><a className="white-text" href="https://github.com/logankeyes1212/project3">Github</a></li>
                            <br></br>
                            <li><a href="http://facebook.com"><img src={facebookImg} /></a><a href="http://linkedin.com"><img src={linkedinImg} /></a><a href="http://twitter.com"><img
                                src={twitterImg} /></a></li>

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
}

export default FooterHome;