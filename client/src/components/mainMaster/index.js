import React, { Component } from 'react';
import Bird from "../Background1";
import Towns from "../Background2";
import Davis from "../Background3";
import FooterMain from "../FooterMainPage";
import Picks from "../Picks";
import Resources from "../Resources";
import '../../assets/css/materialize.css';
import '../../assets/css/style.css';


class MainMasterComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>

                <Bird />
                <Picks />
                <Towns />
                <Resources />
                <Davis />
                <FooterMain />

            </div>
        )
    }
}

export default MainMasterComponent