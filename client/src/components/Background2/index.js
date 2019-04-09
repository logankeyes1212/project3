import React, { Component } from 'react'
import KATowns from "../../assets/img/backgroundImages/towns.jpg"
import { Parallax } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'




class Towns extends Component {
    constructor() {
        super()
    }
    render (){
return(
    <div>
        <Parallax imageSrc={KATowns}/>
    </div>   
);
}
}

export default Towns