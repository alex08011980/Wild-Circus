import React, { Component } from "react";
import Accueil from "./components/Accueil/accueil";

/* import contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import Pageaccueil from "./components/pageaccueil/Pageaccueil";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Reservation from "./components/reservation/Reservation";
import Spectacle from "./components/spectacle/Spectacle"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      redirectToAdminPage: false,
      currentBlog: "",
      redirectToBlogPage: false
    };
  }

  render() {
    return (
      <div id="App">
        <Accueil />
      </div>
    );
  }
}

export default App;
