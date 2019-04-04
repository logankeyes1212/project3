import React from "react";
import fantasydataImg from "../img/Resources/fantasydata.png"
import nbaImg from "../img/Resources/nba-logo.png"
import fanduelImg from "../img/Resources/FanDuel.png"
import materializeImg from "../img/Resources/materialize.png"
import htmlImg from "../img/Resources/htmllogo.png"
import javascriptImg from "../img/Resources/javascript_logo.png"


function Resources() {
    return (
        <>
            <div className="container" id="Resources">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Resources</h4>
                            <div className="col s12 m4 center"><br></br><img src={fantasydataImg} alt="fantasydata"/><br></br><br></br><br></br><img src={nbaImg} alt="nba" /></div>
                            <div className="col s12 m4 center"><img src={fanduelImg} alt ="fanduel" /><br></br><br></br> <img src={materializeImg} alt="materialize"/></div>
                            <div className="col s12 m4 center"><img src={htmlImg} alt="html" /><br></br><br></br> <img src={javascriptImg} alt= "javascript"/></div >
                        </div >
                    </div >
                </div >
            </div >
        </>
    );
}

export default Resources;