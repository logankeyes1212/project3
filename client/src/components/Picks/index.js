import React, { Component } from 'react';
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';

class Picks extends Component {
    state = {
        league: "The default text"
    }
    constructor() {
        super()
    }
    leagueLeader = data => {
        this.setState({
            league:
                <div>
                    <h4>League fantasy leaders</h4>
                    < table className="responsive-table striped highlight" >
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Team</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>SG</td>
                                <td>LeBron James</td>
                                <td>L.A. Lakes</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Karl Anthony Towns</td>
                                <td>MN Timberwolves</td>
                            </tr>
                            <tr>
                                <td>SG</td>
                                <td>Kevin Durant</td>
                                <td>SF Golden State Warriors</td>
                            </tr>
                        </tbody>
                    </table >
                </div>
        });
    }
    leagueSleepers = data => {
        this.setState({
            league:
                <div>
                    <h4>League fantasy sleepers</h4>
                    < table className="responsive-table striped highlight" >
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Team</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>SG</td>
                                <td>LeBron James</td>
                                <td>L.A. Lakes</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Karl Anthony Towns</td>
                                <td>MN Timberwolves</td>
                            </tr>
                            <tr>
                                <td>SG</td>
                                <td>Kevin Durant</td>
                                <td>SF Golden State Warriors</td>
                            </tr>
                        </tbody>
                    </table >
                </div>
        });
    }
    leagueTrending = data => {
        this.setState({
            league:
                <div>
                    <h4>Trending players in fantasy</h4>
                    < table className="responsive-table striped highlight" >
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Team</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>SG</td>
                                <td>LeBron James</td>
                                <td>L.A. Lakes</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Karl Anthony Towns</td>
                                <td>MN Timberwolves</td>
                            </tr>
                            <tr>
                                <td>SG</td>
                                <td>Kevin Durant</td>
                                <td>SF Golden State Warriors</td>
                            </tr>
                        </tbody>
                    </table >
                </div>
        });
    }
    render() {
        return (
            <div className="container" id="leaders">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <a onClick={this.leagueLeader} className="btn-large waves-effect waves-light orange lighten-1">Leaders</a>
                            <a onClick={this.leagueSleepers} className="btn-large waves-effect waves-light orange lighten-1">Sleepers</a>
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