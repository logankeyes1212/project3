import React from "react";
import AnthonyDavis from "../img/backgroundImages/davis.jpeg"

function Davis(){
return(
    <>
    <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
            <div class="container">
                <div class="row center">
                   {/* <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1"></a>  */}
                </div>
            </div>
        </div>
        <div class="parallax"><img src={AnthonyDavis} alt="Unsplashed background img 3"/></div>
    </div>
    </>
);
}

export default Davis;