import React from "react";
import KATowns from "../img/backgroundImages/towns.jpg"

function Towns(){
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
        <div className="parallax"><img src={KATowns} alt="Unsplashed background img 2"/></div>
    </div>
    </>
);
}

export default Towns