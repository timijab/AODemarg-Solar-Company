import React from "react";
import Logo from "./images/logo.png"

const currentYear = new Date().getFullYear();

function Last(){
    return <footer>
        <div className="lst">
            <div className="sectionone">
                <img src={Logo} className="imagelogo" alt="company logo"></img>
            </div>
            <div className="sectiontwo">
                <span className="tom"><h3>Services</h3></span>
                <p> Solar Panels </p>
                <p> Inverter </p>
                <p> Batteries </p>
                <p> Cables </p>
            </div>
            <div className="sectionthree">
                <span className="tom"><h3> Useful Links </h3></span>
                <p> Privacy Policy </p>
                <p> Terms & Conditions </p>
                <p> Disclaimer </p>
                <p> Support </p>
            </div>
            <div className="sectionfour">
                <span className="tom"><h3>  Quick Links </h3></span>
                <p> About </p>
                <p> Solutions </p>
                <p> Projects </p>
                <p> Faq's </p>
            </div>
            <div className="sectionfive">
                <span className="tom"><h3> Call Us </h3></span>
                <p> +2348033802409 </p>
                <p> +2348037415154 </p>
                <p> solarinfo@aodemarg.com </p>
                <p> www.aodemarg.com </p>
            </div>
        </div>
        <div className="courtesy">
            <h3> © {currentYear} - A.O. Demarg </h3>
        </div>
</footer>
}

export default Last;