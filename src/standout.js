import React from 'react';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CheckIcon from '@mui/icons-material/Check';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import CallIcon from '@mui/icons-material/Call';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Isaac from './images/Isaac Ademide.png';
import Folake from './images/Folake Adekunle.png';
import James from './images/James Ogenekvwo.png';
import Ayoola from './images/Ayoola Babalola.png';

function Stand(){
    return <div className='doct'>
        <div className='doc'>
            <h1> Stand Out With Us </h1>
            <h4> We drive Solar Solutions </h4>
        </div>
        <div className='containerl'>
            <div className='rowr'>
                <div class='err'>
                    <FilterNoneIcon className='ic'/>
                    <h3>Quality Material</h3>
                    <p className='writes'> Crafting with precision, integrating innovative solar solutions for sustainable energy</p>
                </div>
                <div class='err'>
                    <CheckIcon className='ic'/>
                    <h3>Accredited</h3>
                    <p className='writes'>Experience excellence through our accredited craftsmanship, using premium materials innovatively.</p>
                </div>
                <div class='err toremove'>
                    <EngineeringIcon className='ic'/>
                    <h3>Workers</h3>
                    <p className='writes'>Empowering skilled artisans, fostering excellence with top-quality materials and innovation.</p>
                </div>
            </div>
            <div className='rower'>
            <div class='err'>
                    <AddAlarmIcon className='ic'/>
                    <h3> Time Avaliability </h3>
                    <p className='writes'>Ensuring timely access to premium resources, optimizing efficiency for our clients. </p>
                </div>
                <div class='err'>
                    <CallIcon className='ic'/>
                    <h3> Quick Response </h3>
                    <p className='writes'> Swift resolutions for repairs and maintenance, ensuring seamless service provision. </p>
                </div>
                <div class='err toremove'>
                    <WorkspacePremiumIcon className='ic'/>
                    <h3> Warranty </h3>
                    <p className='writes'> Secured by a comprehensive warranty, guaranteeing quality craftsmanship and satisfaction. </p>
                </div>
            </div>
        </div>
        <div className='secondhalf'>
                <div>
                    <h3> Testimonials </h3>
                    <h1> Client's  Feedback </h1>
                </div>
                <div className='firstclass'>
                    <img className="profileimg" src={Isaac} alt='Isaac Ademide'></img>
                    <h3> Isaac Ademide </h3>
                    <p> Using the Aodemarg solar solution was best decision I made.</p>
                    <img className="profileimg" src={James} alt='james'></img>
                    <h3> James Ogenekvwo </h3>
                    <p> Using the Aodemarg solar solution was best decision I made.</p>
                   
                </div>
                <div className='secondclass'>
                    <img className="profileimg" src={Folake} alt='Folake'></img>
                    <h3> Folake Adekunle </h3>
                    <p> Using the Aodemarg solar solution was best decision I made.</p>
                    
                    <img className="profileimg" src={Ayoola} alt='ayoola'></img>
                    <h3> Ayoola Babalola </h3>
                    <p> Using the Aodemarg solar solution was best decision I made.</p>
                </div>
        </div>
    </div>
}

export default Stand;