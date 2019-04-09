import React, { Component } from 'react';
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';
import API from "../../utils/API";


console.log("API",API.getPlayer)


class Picks extends Component {
    state = {
        // leaders: "league",
        // sleepers: "sleepers",
        // trending: "trending"
        league: "The default text"
    }
   
//     test(){
//     API.getBook(this.props.match.params.id)
//     .then(res => this.setState({ player: res.data }))
//     .catch(err => console.log(err));
// }
    
    
    constructor() {
        super()
    }
    leagueLeader = data => {
        this.setState({
            league:
                <div>
                    <h4>League leaders</h4>
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
                    <h4>League sleeper picks</h4>
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
            league: <div>
                <h4>League trending picks</h4>
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
                            <a onClick={ this.test} className="btn-large waves-effect waves-light orange lighten-1">Leaders</a>
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