import React from "react";
import AnthonyDavis from "../img/backgroundImages/davis.jpeg"

function Davis(){
return(
    <>
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                   {/* <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1"></a>  */}
                </div>
            </div>
        </div>
        <div className="parallax"><img src={AnthonyDavis} alt="Unsplashed background img 3"/></div>
    </div>
    </>
);
}

export default Davis;