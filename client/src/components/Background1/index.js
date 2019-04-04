import React from "react";
import LarryBird from "../img/backgroundImages/bird.jpg"

function Bird(){
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
        <div className="parallax"><img src={LarryBird} alt="Unsplashed background img 1"/></div>
    </div>
    </>
);
}

export default Bird