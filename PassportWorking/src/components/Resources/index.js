import React from "react";
import fantasydataImg from "../../assets/img/Resources/fantasydata.png"
import nbaImg from "../../assets/img/Resources/nba-logo.png"
import fanduelImg from "../../assets/img/Resources/FanDuel.png"
import materializeImg from "../../assets/img/Resources/materialize.png"
import htmlImg from "../../assets/img/Resources/htmllogo.png"
import javascriptImg from "../../assets/img/Resources/javascript_logo.png"
import { Button, Card, Row, Col } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'

function Resources() {
    return (
        
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
        
    );
}

export default Resources;