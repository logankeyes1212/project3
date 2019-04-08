import React, { Component } from 'react';
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';
import API from "../../utils/API";

console.log("API ",API)
class MyTeam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            default: ""
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 

    componentDidMount() {
        this.myTeamDiv();
    }
    myTeamDiv = data => {
        this.setState({
            default:
                <div>
                    <h4>My Team</h4>
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
    updateInput(event) {
        this.setState({ playerName: event.target.value })
    }


    handleSubmit() {
        console.log('Your input value is: ' + this.state.playerName)
        //Send state to the server code
    }
    searchDiv = data => {
        this.setState({
            default: <div>
                <h4>Search For A Player</h4>
                <input type="text" onChange={this.updateInput}></input>
                <input type="submit" onClick={this.handleSubmit} ></input>
            </div>
        });

    }


    render() {

        return (

            <div className="container" id="myTeam">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">

                            <a onClick={this.myTeamDiv} className="btn-large waves-effect waves-light lighten-1 orange">My Team</a>
                            <a onClick={this.searchDiv} className="btn-large waves-effect waves-light lighten-1 orange">Search</a>
                            <div>{this.state.default}</div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}




export default MyTeam