import React from "react";
import LarryBird from "../img/backgroundImages/bird.jpg"


function BirdLogin() {
    return (
        <>
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h1>Welcome to</h1>
                            <h1>The Se7enth Man</h1>
                            <div id="signUpClick">
                                <a href="#modal2" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 modal-trigger">SignUp</a>
                            </div>
                            <div id="signUpModal"></div>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={LarryBird} alt="Unsplashed background img 1" /></div>
            </div>
        </>
    );
}

export default BirdLogin

