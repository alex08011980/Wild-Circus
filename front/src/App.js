import React, { Component } from "react";
import Accueil from "./components/Accueil/accueil";
import { Switch, Route, Redirect } from 'react-router-dom';
import Spectacle from './components/Spectacle/Spectacle';
import Reservation from "./components/Reservation/Reservation";
import Contact from "./components/Contact/Contact";
import Login from './components/Admin/Login';
import AdminPage from './components/Admin/AdminUsers';

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

  updateLogin = () => {
    this.setState({
      isLogged: true,
      redirectToAdminPage: true
    });

  };

  render() {
    const { isLogged, redirectToAdminPage } = this.state;
    return (
      <div id="App">
        {redirectToAdminPage && <Redirect to="/admin" />}
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Spectacle" component={Spectacle} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/login" component={() => <Login updateFunction={this.updateLogin} />} />
          {isLogged ? <Route exact path="/admin" component={AdminPage} /> : <Redirect to="/" />}
        </Switch>
      </div>
    );
  }
}

export default App;
