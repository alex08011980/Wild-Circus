import React, { Component } from 'react';
import './contact.css';

class seccontact extends Component {
    render() {
        return (
            <div className="container pb-5">
                <div className="">
                    <div className="text-center size-contact pt-3">
                        <h1>Contact</h1>
                    </div>



                    <div className="d-flex pt-4 ">
                    <form className="container w-50 pt-5 pr-5">
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nom</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Prenom</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Tel</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </form>


                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.598939080829!2d1.0156237652358753!3d48.47278350957529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3c1f7f1d46577%3A0x19c3185d91e4b7a0!2s44%20Rue%20de%20la%20Gare%2C%2028240%20La%20Loupe!5e0!3m2!1sfr!2sfr!4v1580820500339!5m2!1sfr!2sfr" width="600" height="350"   ></iframe>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default seccontact;