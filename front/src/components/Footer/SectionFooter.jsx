import React, { component, Component } from 'react';

class SectionFooter extends Component{
    render(){
        return(
            <div className="footer-container p-5">
                <p className="titre-footer text-white">Wild Circus</p>
                <span className="text-white">Le nouveau Wild Circus 2020 © création : MAMF </span>
                <span> <a href="#"> - Mentions légales - </a></span>
                <span></span>
            </div>
        )
    }
}

export default SectionFooter;