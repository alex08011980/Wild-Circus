import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import Spectacle from "../Spectacle/section-spectacle";
import Footer from "../Footer/footer";

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
        <Spectacle />
        <Footer />
      </div>
    );
  }
}

export default Accueil;
