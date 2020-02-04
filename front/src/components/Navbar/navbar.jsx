import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <div className="">
        <div className="bckg w-100">
          <nav
            class="navbar navbar-expand-md bg-danger navbar-dark "
            id="main-nav"
          >
            <div class="container">
              <a href="/" class="navbar-brand">
                Wild Circus
              </a>
              <button
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item mr-1"></li>
                  <a href="./Spectacle" class="nav-link text-white">
                    Spectacle
                  </a>
                  <li class="nav-item mr-1">
                    <a href="/Reservation" class="nav-link text-white">
                      Réservation
                    </a>
                  </li>

                  <li class="nav-item mr-1">
                    <a href="/Contact" class="nav-link text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        
      </div>
    );
  }
}

export default navbar;
