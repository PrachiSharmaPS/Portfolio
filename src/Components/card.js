import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './card.css'; 
import first from '../Images/watchFirst.png'
import second from '../Images/watchSecond.png'
import third from '../Images/watchThird.png'
import Urlshortener from '../Images/Url-shortener.png'
import OrdersApprovalApp from '../Images/OrdersApprovalApp.png'

const Card = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
        <div className="card">
          
        <div className="text-container">
            <p className="card-title">URL Shortener</p>
            <p className="card-description">The URL Shortener project is a full-stack web application aimed at providing users with a simple and efficient solution to shorten long URLs into more manageable and shareable links. This project utilizes a combination of <b>React.js</b> for the frontend,<b> Node.js </b>for the backend, and<b> MongoDB</b> and <b>Redis</b> for data storage.</p>
        </div>
        <div className="image-container">
        
                <div>
                    <img src={Urlshortener} alt="Urlshortener" className="image-slide" /> 
                </div>
               
           
        </div>
    </div>
        <div className="card">
            <div className="image-container">
                <Slider {...settings}>
                    <div>
                        <img src={first} alt="FirstImage" className="image-slide" /> 
                    </div>
                    <div>
                        <img src={second} alt="SecondImage" className="image-slide" /> 
                    </div>
                    <div>
                        <img src={third} alt="ThirdImage" className="image-slide" /> 
                    </div>
                </Slider>
            </div>
            <div className="text-container">
                <p className="card-title">Featured Watch</p>
                <p className="card-description">Featured Watch is a platform designed to streamline the buying and selling process of luxury watches. The project utilizes<b> MailModo </b>as its mail service provider, ensuring efficient and reliable email communication for users. With its user-friendly interface and intuitive functionality, users can achieve their watch-related transactions with ease, all within a few clicks.</p>
            </div>
            
        </div>
        <hr />
        <div className="card">
          
            <div className="text-container">
                <p className="card-title">Orders Approval App</p>
                <p className="card-description">The Orders Approval App, developed using DronaHQ, I employed <b>MySQL</b> to manage order data efficiently. This application streamlines the process of order management, allowing users to seamlessly add new orders and update their status from pending to approved, rejected, or dispatched. With a user-friendly interface and robust backend, this app ensures smooth workflow management, enhancing productivity and decision-making.</p>
            </div>
            <div className="image-container">
            
                    <div>
                        <img src={OrdersApprovalApp} alt="FirstImage" className="image-slide" /> 
                    </div>
                   
               
            </div>
        </div>
        </>
    );
};

export default Card;
