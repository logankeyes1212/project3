import React, { Component } from 'react'
import logoLarge from "../../assets/img/logo/logoLarge.png"
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'


const pStyle = {
    fontSize: "10px"
};

const aboutStyle = {
    fontSize: '20px',
}

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
                            <h1>The 7th Man</h1>
                            <p style = {aboutStyle}>Do you want to be the <b>Lebron James</b> of your fantasy basketball league!? 
                                Do you want to score triple doubles every game like <b>Russel Westbrook</b>!? Or maybe you 
                                just want a beautiful beard like <b>James Harden</b>?** Here at the 7th Man, we are dedicated 
                                to make sure you have the knowledge you need to draft the best team available and get the 
                                most points out of your line up every week!  
                            </p>
                            <br></br><br></br>
                            <p style={pStyle}> ** In no way will using The 7th Man help you grow a beautiful beard like James Harden.... trust me I've tried..</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                ) 
 
                }
}

export default AboutUs;