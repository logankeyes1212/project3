import React from "react";
import LarryBird from "../img/backgroundImages/bird.jpg"

function Bird(){
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
        <div class="parallax"><img src={LarryBird} alt="Unsplashed background img 1"/></div>
    </div>
    </>
);
}

export default Bird