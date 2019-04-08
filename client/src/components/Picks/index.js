import React, { Component } from 'react';
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';
import logo from "../../assets/img/logo/logob-ball.png";




class Picks extends Component {
    state = {
        // leaders: "league",
        // sleepers: "sleepers",
        // trending: "trending"
        league: "The default text"
    }
    constructor() {
        super()
    }
    leagueLeader = data => {
        this.setState({ league: "leaders div" });

    }
    leagueSleepers = data => {
        this.setState({ league: "sleepers div" });

    }
    leagueTrending = data => {
        this.setState({ league: "trending div" });

    }

    render() {

        return (

            <div className="container" id="leaders">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <a onClick={this.leagueLeader} className="btn-large waves-effect waves-light orange lighten-1">Leaders</a>
                            <img src={logo} className="App-logo" alt="logo" />
                            <a onClick={this.leagueSleepers} className="btn-large waves-effect waves-light orange lighten-1">Sleepers</a>
                            <img src={logo} className="App-logo" alt="logo" />
                            <a onClick={this.leagueTrending} className="btn-large waves-effect waves-light orange lighten-1">Trending</a>
                            <div>{this.state.league}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Picks