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
                  <p className="card-title_accueil">
                    Vous serez accueillis sous les célèbres rayures rouges et
                    blanches d'un tout nouveau chapiteau rond ultra chaleureux
                    au confort total de 1100 sièges. La décoration style baroque
                    et les éclairages à profusion ont de quoi faire pâlir les
                    salles les plus prestigieuses.
                  </p>
                </div>
                <div className="div-card-accueil text-center">
                  <img
                    className="img-accueil"
                    src="images/femme_rose.jpg"
                    alt="test"
                  />
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
                    <img
                      className="img-accueil"
                      src="images/acrobate_fille.jpg"
                      alt="test"
                    />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button type="button" class="btn btn-danger">
                      <a href="Spectacle">En savoir plus</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card m-3 ">
                <div className="card-body  ">
                  <div className="text-center pb-2">
                    <h3>Reservation</h3>
                  </div>
                  <div className=" text-center">
                    <img
                      className="img-accueil"
                      src="images/tickets.jpg"
                      alt="test"
                    />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button type="button" class="btn btn-danger">
                      <a href="Reservation">En savoir plus</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card m-3 ">
                <div className="card-body  ">
                  <div className="text-center pb-2">
                    <h3>Contact</h3>
                  </div>
                  <div className=" text-center">
                    <img
                      className="img-accueil"
                      src="images/cheval.jpg"
                      alt="test"
                    />
                  </div>
                  <div className=" pt-5 decoration-accueil text-center">
                    <button type="button" class="btn btn-danger">
                      <a href="Contact">En savoir plus</a>
                    </button>
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
