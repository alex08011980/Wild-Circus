import React, { Component } from 'react';
import './SectionChapiteau.css';

class SectionChapiteau extends Component{
    render(){
        return(
            <div className="d-flex flex-column div-chapiteau">
                <p className="text-chapiteau text-center p-3">Des spectacles à vous couper le soufle !</p>
                <div className="div-img-chapiteau">
                </div>
            </div>
        )
    }
}

export default SectionChapiteau;