import React, { Component } from 'react'
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'



class MyTeam extends Component {
    state = {
        default: "my team",


    }
    constructor() {
        super()
    }
    myTeamDiv = data => {
        this.setState({ default: "My Team================" });

    }
    searchDiv = data => {
        this.setState({ default: <form>
            <label>
                Player Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> });

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