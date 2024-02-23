import React from "react";
import Cardone from "./images/card 1.png";
import Cardtwo from "./images/card 2.png";
import Cardthree from "./images/card 3.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Unlock(){
    return <div className="solutions">
        <h1 id="sol"> Unlock your Solutions </h1>
        <div className="cardparent">
            {/* card elements */}
            <div className="cardrows">
                <img src={Cardone} className="Cardone" alt="Solar panel Installation"></img>
                <div className="wrut">
                    <h3>Solar panel Installation</h3>
                    <p>Celebrate sustainability with our expert solar panel installations. Harnessing the power of the sun for a brighter, greener future.</p>
                    <p className="lastp"> ReadMore <ArrowForwardIcon/> </p>
                </div>
            </div>
            <div className="cardrows">
                <img src={Cardtwo} className="Cardone" alt="Solar Panel maintainance"></img>
                <div className="wrut">
                    <h3>Solar Panel maintainance</h3>
                    <p> Keep your solar investment shining bright with our professional maintenance services. We ensure optimal performance and longevity for your solar panel system.</p>
                    <p className="lastp"> ReadMore <ArrowForwardIcon/> </p>
                </div>
            </div>
            <div className="cardrows hid">
                <img src={Cardthree} className="Cardone" alt="CBN Exhibition"></img>
                <div className="wrut">
                    <h3>CBN Exhibition</h3>
                    <p> Experience innovation at its finest with our CBN Exhibition. Explore cutting-edge solutions and advancements shaping industries for tomorrow.</p>
                    <p className="lastp"> ReadMore <ArrowForwardIcon/> </p>
                </div>    
            </div>
        </div>
    </div>
}

export default Unlock;