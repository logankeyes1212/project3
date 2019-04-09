import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {Parallax} from 'react-materialize';
import { Button, Card, Row, Col } from "react-materialize";
import { List, ListItem } from "../components/Pickers";

class Players extends Component {
  state = {
    players: [],
    YahooName:"",
    FantasyPoints:""
    // title: "",
    // author: "",
    // synopsis: ""
  };

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = () => {
    API.getPlayers()
      .then(res =>
        this.setState({ players: res.data, YahooName: ""})
      )
      .catch(err => console.log(err));
  };

  deletePlayer = id => {
    API.deletePlayer(id)
      .then(res => this.loadPlayers())
      .catch(err => console.log(err));
  };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.YahooName) {
//       API.savePlayer({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadPlayers())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-6 sm-12">
            <div className="row">
              <h1>Players On My List</h1>
            </div>
            {this.state.players.length ? (
              <List>
                {this.state.players.map(player => (
                  <ListItem key={player._id}>
                    <Link to={"/players/" + player._id}>
                      <strong>
                        {player.YahooName}
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Players;


