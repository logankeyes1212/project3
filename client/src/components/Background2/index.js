import React from "react";
import KATowns from "../img/backgroundImages/towns.jpg"

function Towns(){
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
        <div class="parallax"><img src={KATowns} alt="Unsplashed background img 2"/></div>
    </div>
    </>
);
}

export default Towns