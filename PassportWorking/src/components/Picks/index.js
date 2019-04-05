import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import $ from 'jquery'; 
// import $ from 'jquery/src/jquery'
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'
// import '../../assets/js/results'




class Picks extends Component {
    constructor() {
        super()
    }


    render(){

        return (
        
            <div className="container" id="leaders">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <a id="leagueLeadersClick" className="btn-large waves-effect waves-light teal lighten-1">Leaders</a>
                            <a id="leagueSleeperClick" className="btn-large waves-effect waves-light teal lighten-1">Sleepers</a>
                            <a id="leagueTrendingClick" className="btn-large waves-effect waves-light teal lighten-1">Trending</a>
                            <div id="leagueLeadersDiv"></div>
                            <div id="leagueSleeperDiv"></div>
                            <div id="leagueTrendingDiv"></div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
}

export default Picks