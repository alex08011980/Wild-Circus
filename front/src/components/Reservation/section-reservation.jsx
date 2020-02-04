import React, { Component } from 'react';
import './section-reservation.css';

class SectionReservation extends Component{
    render(){
        return(
            <div className="reservation-container">

                <div className="div-img-reservation">
                </div>

                <div className="container-reservation">
                    <div className="div-description-reservation">
                        <div className="div-img-reservation">
                            <img className="img-reservation" src="/images/acrobate_fille.jpg" alt="alt2"/>
                        </div>
                        <div className="div-texte-reservation p-3">
                            <p className="description-reservation">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                        <div className="div-tarif-reservation">
                            <p>50$</p>
                        </div>

                        <div className="div-btn-reservation">
                            <button>Réservation</button>
                        </div>
                    </div>
                </div>

                <div className="container-reservation">
                    <div className="div-description-reservation">
                        <div className="div-img-reservation">
                            <img className="img-reservation" src="/images/girl-1219339_1920.jpg" alt="alt3"/>
                        </div>
                        <div className="div-texte-reservation p-3">
                            <p className="description-reservation">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                        <div className="div-tarif-reservation">
                            <p>9$</p>
                        </div>

                        <div className="div-btn-reservation">
                            <button>Réservation</button>
                        </div>
                    </div>
                </div>

                <div className="container-reservation">
                    <div className="div-description-reservation">
                        <div className="div-img-reservation">
                            <img className="img-reservation" src="/images/acrobates.jpg" alt="alt1"/>
                        </div>
                        <div className="div-texte-reservation p-3">
                            <p className="description-reservation">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                        <div className="div-tarif-reservation">
                            <p>35$</p>
                        </div>

                        <div className="div-btn-reservation">
                            <button>Réservation</button>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default SectionReservation;