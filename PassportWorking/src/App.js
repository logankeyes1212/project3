import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link} from 'react-router-dom'
// components
import Signup from './components/Sign-up'
import Login from '../src/components/Login-form'
import Navbar from '../src/components/NavbarTop'
import MainMasterComponent from '../src/components/mainMaster'
import LandingPage from '../src/components/Home'
import { Button, Card, Row, Col } from 'react-materialize';



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
 
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn && 
           <MainMasterComponent />
          //render all the things
        }
        
        {/* Routes to different components */}
        <Route
          exact path="/home"
          component={LandingPage}
          />
        
        <Route
          exact path="/"
          component={LandingPage}
          />

        <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

      </div>
    );
  }
}

export default App;
