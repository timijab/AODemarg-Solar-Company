import React from "react";
import logo from "./images/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Heading(){
    return <div className="maincover">
            <div className="tab">
                <div className="firsttabs">
                    <img id="logoid" alt="aodemarg logo" src={logo}></img>
                    <div className="noone">
                        <h3 id="ao"> AO Demarg </h3>
                        <h6 id="put"> Putting the sun to work! </h6>
                    </div>
                </div>
                <div className="endtabs">
                    
                    <h4 className="row4 hom"> Home </h4>
                    <h4 className="row4 ab"> About <KeyboardArrowDownIcon /> </h4>
                    <h4 className="row4 sol"> Solutions <KeyboardArrowDownIcon />  </h4>
                    <h4 className="row4 pro"> Projects </h4>
                    <h4 className="row4 cont">Contact Us </h4>
                </div>
                <button className="dropdown"> tap </button>
        </div>
        <div className="solar">
        <h3> Solar Energy </h3>
        </div>
    
        <div className="business">
            <h1 id="sun"> SUNSHINE IS </h1>
            <h1 id="our"> OUR BUSINESS </h1>
        </div>
        <div className="talk">
            <p> For uninterrupted 24/7 electricity for your businesses comfort etc. </p>
            <p> Unlimited possibilites from the sun. </p>
        </div>
        <button id="butn"> <h3>Learn More <KeyboardArrowDownIcon /></h3> </button>
     
    </div>
}

export default Heading;