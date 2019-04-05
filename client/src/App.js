import React from "react";
import Bird from "./components/Background1"
import Towns from "./components/Background2"
import Davis from "./components/Background3"
import Nav from "./components/NavMainPage";
import Footer from "./components/FooterMainPage"
import Picks from "./components/Picks"
import Resources from "./components/Resources"
import Login from "./components/Login"



function App() {
  return (
    <>
      <Login />
      <Nav />
      <Bird />
      <Picks />
      <Towns />
      <Resources />
      <Davis />
      <Footer />
    </>
  );
}

export default App;

