import React from 'react'
import Navbar from "./Navbar";
import BannerImage from "../Assets/bannerimage.jpg";
import{FiArrowRight} from "react-icons/fi";
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>

            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Empower Your Career with Data-Driven Insights!
                </h1>
                <p className='primary-text'>
                Unlock your true potential with our cutting-edge AI tool designed to elevate your career journey. Whether you're seeking personalized career advice, improving your skills, or exploring new opportunities, our platform provides tailored insights to help you achieve your goals. From resume building and interview preparation to skill assessments and career path recommendations, we've got you covered.
                </p>
                <button className='secondary-button'>
                    SignUp <FiArrowRight />
                </button>
                
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt=" "/>
            </div>
        </div>
            
           
    </div>
    
  );
};

export default Home;