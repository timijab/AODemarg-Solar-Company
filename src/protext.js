import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import flyer from '../src/images/flier.png';

function Supply(){
    return <div className='mainblock'>
        <div className='partone'>
            <h3> Expanded Solutions Services </h3>
            <h1> Discover More </h1>
            <p> Discover More with Aodemarg, where innovation meets excellence, unlocking limitless possibilities for our valued clients and partners. </p>
            <div className='bone'>
                
            <ol> <CheckCircleIcon /> Solar Pumps </ol>
            <ol> <CheckCircleIcon /> Solar Heaters </ol>
            <ol> <CheckCircleIcon /> Solar Water Heaters</ol>
            <ol> <CheckCircleIcon /> Solar Portable Chargers. </ol>
            <ol> <CheckCircleIcon /> Solar Generator. </ol>
                <button className='check'> Check out for more <ArrowForwardIosOutlinedIcon/> </button>
            </div>
        </div>
        <div className='parttwo'>
            <div className='cone'>
                <img src={flyer} alt='flier of aodemarg'></img>
            </div>
        </div>

    </div>
}
export default Supply;