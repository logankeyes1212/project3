import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import facebookImg from "../../assets/img/navlinks/icons8-facebook-48.png";
import linkedinImg from "../../assets/img/navlinks/icons8-linkedin-48.png";
import twitterImg from "../../assets/img/navlinks/icons8-twitter-48.png";
import logoSmall from "../../assets/img/logo/logoSmall.png";
import '../../App.css';
import axios from 'axios';


class Navbar extends Component {

    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            // console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null,
                })
                console.log('works')
                return <Redirect to={{ pathname: "/home" }} />

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
            <div>

                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">

                        {loggedIn ? (
                            <div>
                                <img src={logoSmall} alt="logo" />

                                <ul className="right hide-on-med-and-down">
                                    <li><a href="#leaders">League Leaders</a></li>
                                    <li><a href="#myTeam">My Team</a></li>
                                    <li><a href="#Resources">Resources</a></li>
                                    <li><a href="#bio">Company Bio</a></li>
                                    <li>
                                        <Link to="/home" onClick={this.logout}>
                                            <span className="text-secondary">Logout</span>
                                        </Link>
                                    </li>
                                    <li><a href="http://facebook.com"><img src={facebookImg} alt="facebook" /></a></li>
                                    <li><a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin" /></a></li>
                                    <li><a href="http://twitter.com"><img src={twitterImg} alt="twitter" /></a></li>

                                </ul>


                                <ul id="nav-mobile" className="sidenav">
                                <img src={logoSmall} alt="logo" />
                                    <li><a href="#leaders">League Leaders</a></li>
                                    <li><a href="#myTeam">My Team</a></li>
                                    <li><a href="#Resources">Resources</a></li>
                                    <li><a href="#bio">Company Bio</a></li>
                                    <li>
                                        <Link to="/home" onClick={this.logout}>
                                            <span className="text-secondary">Logout</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="http://facebook.com"><img src={facebookImg} alt="bookface" /></a>
                                        <a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin" /></a>
                                        <a href="http://twitter.com"><img src={twitterImg} alt="twitter" /></a>
                                    </li>
                                </ul>
                                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            </div>
                        ) : (
                                <div>
                                    <img src={logoSmall} alt="logo" />

                                    <ul className="right hide-on-med-and-down">
                                        <li>
                                            <Link to="/home">
                                                <span className="text-secondary">Home</span>
                                            </Link>
                                        </li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#bio">Company Bio</a></li>
                                        <li>
                                            <Link to="/login" >
                                                <span className="text-secondary">Login</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" >
                                                <span className="text-secondary">sign up</span>
                                            </Link>
                                        </li>
                                        <li><a href="http://facebook.com"><img src={facebookImg} alt="facebook" /></a></li>
                                        <li><a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin" /></a></li>
                                        <li><a href="http://twitter.com"><img src={twitterImg} alt="twitter" /></a></li>

                                    </ul>
                                    
                                    <ul id="nav-mobile" className="sidenav">
                                    <img src={logoSmall} alt="logo" />
                                        <li>
                                            <Link to="/home">
                                                <span className="text-secondary">Home</span>
                                            </Link>
                                        </li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#bio">Company Bio</a></li>
                                        <li>
                                            <Link to="/login" >
                                                <span className="text-secondary">Login</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" >
                                                <span className="text-secondary">sign up</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com"><img src={facebookImg} alt="bookface" /></a>
                                            <a href="http://linkedin.com"><img src={linkedinImg} alt="linkedin" /></a>
                                            <a href="http://twitter.com"><img src={twitterImg} alt="twitter" /></a>
                                        </li>
                                    </ul>
                                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                </div>



                            )}
                    </div>
                </nav>
            </div>

        );

    }
}

export default Navbar