import React, { Component } from 'react'
import { Button, Card, Row, Col, Parallax } from 'react-materialize';
import '../../assets/css/materialize.css'
import '../../assets/css/style.css'
import LarryBirdBackground from '../../assets/img/backgroundImages/bird.jpg'



class Bird extends Component {
    constructor() {
        super()
    }
    render (){
return(

    <div>
<Parallax imageSrc={LarryBirdBackground}/>
    </div>
   
);
}
}


export default Bird

