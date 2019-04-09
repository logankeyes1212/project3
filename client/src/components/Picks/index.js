import React, { Component } from 'react';
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';
import logo from "../../assets/img/logo/logob-ball.png";
import API from "../../utils/API";



class Picks extends Component {
    // state = {
    //     // leaders: "league",
    //     // sleepers: "sleepers",
    //     // trending: "trending"
    //     players : {},
    //     league: "The default text"
    // }
    constructor(props) {
        super(props);
        this.state ={
            players:[],
            isLoaded: false,
            league : "The default text",
        }
    }

    componentDidMount() {
        API.getPlayers()
            .then(res => this.setState({ player: res.data }))
            .catch(err => console.log(err));
           
    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < this.state; j++) {
                children.push(<td key={j}>{`Column ${j + 1}`}</td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
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
        console.log(this.state.data);
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