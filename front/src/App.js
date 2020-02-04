import React, { Component } from "react";
import Accueil from "./components/Accueil/accueil";
import { Switch, Route } from 'react-router-dom';
import Spectacle from './components/Spectacle/Spectacle';
import Reservation from "./components/Reservation/Reservation";
import Contact from "./components/Contact/Contact";

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
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Spectacle" component={Spectacle} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
