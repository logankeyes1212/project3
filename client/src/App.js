import React from "react";
import Bird from "./components/Background1"
import Towns from "./components/Background2"
import Davis from "./components/Background3"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Picks from "./components/Picks"
import Resources from "./components/Resources"


function App() {
  return (
    <body>
      <Nav />
      <Bird />
      <Picks />
      <Towns />
      <Resources />
      <Davis />
      <Footer />
    </body>
  );
}

export default App;

