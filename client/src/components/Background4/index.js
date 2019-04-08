import React, { Component } from 'react'
import giannisAnt from "../../assets/img/backgroundImages/giannis.jpg"
import { Parallax } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'

class Giannis extends Component {
    constructor() {
        super()
    }
    render() {
        return (


            <div>
                <Parallax imageSrc={giannisAnt} />
            </div>

        );
    }
}

export default Giannis;