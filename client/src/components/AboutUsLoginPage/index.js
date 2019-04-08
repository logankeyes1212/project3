import React, { Component } from 'react'
import logoLarge from "../../assets/img/logo/logob-ball.png"
import logoLarge from "../../assets/img/logo/logoLarge.png"
import { Button, Card, Row, Col } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'

class AboutUs extends Component {
    constructor() {
        super()
    }


    render () {

        return (

           <div className="container" id="about">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center">
                        <img src={logoLarge} alt="logo"/>
                        <div>
                            <h4>About Us</h4>
                            <p>Welcome to the The Se7enth Man, the premier fantasy basketball app that helps you find the best player at any position. In our app you can find the who is leading the league at each position, who is trending, and who are the sleeper picks in the league. We stave to be the best fantasy sports helper in the world. Please sign up and start dominating all your friends in fantasy this year.  </p>
                            <br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                ) 
 
                }
}

export default AboutUs;