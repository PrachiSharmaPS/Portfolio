import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './AchivmentStyle.css'; 

import AWS from '../Images/AWSProject.png'
import clavertap from '../Images/clavertap.png'
import POC from '../Images/POC.png'
 

const Achivment = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
        <h4 className="keyAchivment">Recognized for Excellence and Praised by Management</h4>
        <div className="achivmentcard">
        <div className="achivmentcard-image-container">
                <Slider {...settings}>
                    <div>
                        <img src={AWS} alt="FirstImage" className="image-slide" /> 
                        <p className="achivment-description">My very first project was a replica of a file management system using S3 as the data source. I'm proud to say it was a success, earning recognition from my manager. This achievement boosted my confidence and reinforced my commitment to delivering quality work.</p>
                    </div>
                    <div>
                        <img src={clavertap} alt="SecondImage" className="image-slide" /> 
                    </div>
                    <div>
                        <img src={POC} alt="ThirdImage" className="image-slide" /> 
                    </div>
                </Slider>
            </div>
     
    </div>
    
        </>
    );
};

export default Achivment;
