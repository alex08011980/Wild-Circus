import React, { Component } from "react";
import "./spectacle.css";

class Spectacle extends Component {
  state = {};
  render() {
    return (
      <div className="container_spectacle">
        <div class="container">
          <div class="block col-xs-6">
            <div class="card">
              <img
                class="card-img img-responsive"
                src="/images/acrobate_fille.jpg"
                alt="Card image"
              ></img>
              <div class="card-img-overlay">
                <h1 class="card-title text-white">Duo Torres</h1>
              </div>
              <div className="card-text">
                <p>L'art de rendre l'effort invisible.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="block col-xs-6">
            <div class="card">
              <img
                class="card-img img-responsive"
                src="/images/girl-1219339_1920.jpg"
                alt="Card image"
              ></img>
              <div class="card-img-overlay">
                <h1 class="card-title text-white">Drap-dance</h1>
              </div>
              <div className="card-text">
                <p>L'art de la danse.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="block col-xs-6">
            <div class="card">
              <img
                class="card-img img-responsive"
                src="/images/acrobates.jpg"
                alt="Card image"
              ></img>
              <div class="card-img-overlay">
                <h1 class="card-title text-white">Acrobates</h1>
              </div>
              <div className="card-text">
                <p>L'art de la souplesse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spectacle;
