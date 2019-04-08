import React, { Component } from 'react'
import AnthonyDavis from "../../assets/img/backgroundImages/davis.jpeg"
import { Parallax } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'

class Davis extends Component {
    constructor() {
        super()
    }
    render() {
        return (


            <div>
                <Parallax imageSrc={AnthonyDavis} />
            </div>

        );
    }
}

export default Davis;