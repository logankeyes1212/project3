import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Bird from "./components/Background1"
import BirdLogin from "./components/Background1Login"
import Towns from "./components/Background2"
import Davis from "./components/Background3"
import NavMain from "./components/NavMainPage";
import FooterMain from "./components/FooterMainPage"
import Picks from "./components/Picks"
import Resources from "./components/Resources"
import FooterLogin from "./components/FooterLoginPage"
import NavLogin from "./components/NavLoginPage"
import AboutUs from "./components/AboutUsLoginPage"



function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' render={() => (
          <div className="App">
            <NavMain />
            <Bird />
            <Picks />
            <Towns />
            <Resources />
            <Davis />
            <FooterMain />
          </div>
        )} />
        <Route exact={true} path='/login' render={() => (
          <div className="App">
            <NavLogin />
            <BirdLogin />
            <AboutUs />
            <Towns />
            <FooterLogin />
          </div>
        )} />
      </div>
    </BrowserRouter>
    </>
  );
}



export default App;

