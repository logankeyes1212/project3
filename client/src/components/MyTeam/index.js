import React, { Component } from 'react'
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'



class MyTeam extends Component {
    state = {
        default: ""
        // <h4>Checkout my team or search for new players</h4>,


    }
    constructor() {
        super()
    }
    componentDidMount(){
        this.myTeamDiv();
    }
    myTeamDiv = data => {
        this.setState({
            default: 
            <div>
            <h4>My Team</h4>
            < table class="responsive-table striped highlight" >
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
    searchDiv = data => {
        this.setState({
            default: <form>
                <label>
                    Player Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        });

    }


    render() {

        return (

            <div className="container" id="myTeam">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <a onClick={this.myTeamDiv} className="btn-large waves-effect waves-light teal lighten-1">My Team</a>
                            <a onClick={this.searchDiv} className="btn-large waves-effect waves-light teal lighten-1">Search</a>

                            <div>{this.state.default}</div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyTeam