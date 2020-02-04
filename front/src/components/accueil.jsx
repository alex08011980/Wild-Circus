import React, { Component } from "react";
import Navbar from "./navbar";
import Pageaccueil from "./pageaccueil";
import Footer from "./footer";

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

class Accueil extends Component {
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
      <div>
        <Navbar />
        <Pageaccueil />
        <Footer />
      </div>
    );
  }
}

export default Accueil;
