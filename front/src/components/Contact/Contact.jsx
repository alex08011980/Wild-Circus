import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import Seccontact from "../Contact/sectioncontact"
import Footer from "../Footer/footer";



class contact extends Component {
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
        <Seccontact/>
        <Footer />
      </div>
    );
  }
}

export default contact;
