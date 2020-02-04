import React, { Component } from "react";
import "./pageaccueil.css";

class pageaccueil extends Component {
  render() {
    return (
      <div className="container_accueil">
        <div>
          <div className="text-accueil text-white bodytext">
            <p>Bienvenue dans l'univers magique du cirque</p>
          </div>
          <div className="container mx-auto card-deck ">
            <div className="card m-3 ">
              <div className="card-body d-flex ">
                <div className="div-card-accueil pt-5 decoration-accueil">
                  <p className="card-title">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                </div>
                <div className="div-card-accueil text-center">
                  <img className="img-accueil" src="./demon.jpg" alt="test" />
                </div>
              </div>
            </div>


            <div className="d-flex pt-5">
              <div className="card m-3 ">
                <div className="card-body  ">
                <div className="text-center pb-2">
                    <h3>Spectacle</h3>
                  </div>
                  <div className=" text-center">
                    <img className="img-accueil" src="./demon.jpg" alt="test" />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button><a href="Spectacle">En savoir plus</a></button>
                  </div>

                </div>

              </div>
              <div className="card m-3 ">
                <div className="card-body  ">
                  <div className="text-center pb-2">
                    <h3>Reservation</h3>
                  </div>
                  <div className=" text-center">
                    <img className="img-accueil" src="./demon.jpg" alt="test" />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button><a href="Reservation">En savoir plus</a></button>
                  </div>

                </div>

              </div>
              <div className="card m-3 ">
                <div className="card-body  ">
                <div className="text-center pb-2">
                    <h3>Contact</h3>
                  </div>
                  <div className=" text-center">
                    <img className="img-accueil" src="./demon.jpg" alt="test" />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button className=" " ><a  href="Contact">En savoir plus</a></button>
                  </div>

                </div>

              </div>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default pageaccueil;
