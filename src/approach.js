import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

function Approach(){
    return <div className="containerapproach">
       <div className="rowapp"> 
            <div className="app">
                <TipsAndUpdatesOutlinedIcon />
                <h2> Meeting  </h2>
                <p> We always welcome the opportunity to meet with our customers, fostering open communication and building strong relationships.</p>
                <HomeWorkOutlinedIcon/>
                <h2> Desun Air </h2>
                <p> Introducing Desun Air, our innovative new airline, set to revolutionize air travel with unparalleled service and state-of-the-art aircraft. </p>   
            
            </div>
            <div className="appsec">
            <div className="something">
                <TravelExploreIcon/>
                <h2> Site Visitation </h2>
                <p> Site visitation involves physically inspecting a location or property for assessment, evaluation, or investigation purposes. </p>
            </div>
            <div className="other">
                <EmojiObjectsIcon/> 
                <h2> Solar solution </h2>
                <p> Our company offers a robust solar solution encompassing cutting-edge technology and expert consultation to meet diverse energy needs efficiently and sustainably.</p>
            </div>
            </div>
       </div> 
       <div className="rowapptwo"> 
            <h1> Unvielling</h1>
            <h1>Our Approach </h1>
            <p> Our approach combines innovative technology, meticulous planning, and a commitment to excellence to deliver tailored solutions that exceed expectations. </p>
            <button className="get"> <h3> Get a Quote </h3> <ArrowCircleRightIcon/></button>
       </div> 
    </div>
}

export default Approach;