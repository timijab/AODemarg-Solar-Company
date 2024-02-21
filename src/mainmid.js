import React from 'react';
import PictureOne from './images/photo1.jpg'
import PictureTwo from './images/photo2.jpg'
import PictureThree from './images/photo3.png'
import PictureFour from './images/photo4.png'

function MainMiddle(){
    return <div className='maincontainer'>
        <div className='leftside'>
            <h3>
                Certified Company
            </h3>
            <h1> We are Ready for Solar Energy </h1>
            <h5>
                A. O. Demarg Nigeria Limited are synonymous with quality, reliability, performance and trust.
                These qualities form the bedrock of our vision; 
                “we are committed to providing needed and refined electricity through renewable energy solutions while the environment is protected.
            </h5>
            <button className='find'> Find more about us </button>
        </div>
        <div className='rightside'>
            <div className='first'>
                <img className='aodemargimage'src={PictureOne} alt='solar batteries'></img>
                <img className='aodemargimage'src={PictureTwo} alt='inverters cinnected in parallel'></img>
            </div>
            <div className='leftside'>
                <img className="aodemargimage"src={PictureFour} alt='solar panels on a roof'></img>
                <img className="aodemargimage"src={PictureThree} alt='aodemarg technical staff'></img>
            </div>
        </div>

    </div>
}

export default MainMiddle;