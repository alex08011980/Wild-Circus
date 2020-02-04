import React, { Component } from "react";
import Navbar from "../Navbar/navbar";

import Footer from "../Footer/footer";
import SectionReservation from "./section-reservation";



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
        <div className="sticky-wrap">
          <Navbar />
          <SectionReservation />
        </div>

        <div className="sticky-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Accueil;
