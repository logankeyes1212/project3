import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'
import Bird from '../BackgroundHome'
// import FooterMain from "../FooterMainPage"
import AboutUs from "../AboutUsLoginPage"
import Towns from "../Background2"
import FooterHome from "../FooterLandingPage"




class LandingPage extends Component {
    constructor() {
        super()
    }


    render(){

        return (
            <div>
            <Bird />
            <AboutUs />
            <Towns />
            <FooterHome />
            </div>
        );

    }
}

export default LandingPage
