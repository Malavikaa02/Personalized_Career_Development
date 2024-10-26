import React from "react";
import AboutBackgroundImage from "../Assets/aboutimage.jpg";
const About = () => {
    return(
        <div className="about-section-container">
            <div className="about-backgraound-image-container">
                
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt=" "/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                Shaping Your Future with AI-Driven Career Guidance
                </h1>
                <p className="Primary-text">
                we harness the power of AI to provide personalized career insights that help you make informed decisions. From skill development to tailored job recommendations, we offer tools that empower you to achieve your career goals efficiently and confidently.

                </p>
                <p className="primary-text">
                Our platform is designed to guide you through every step of your career journey. With AI-driven recommendations, we help you refine your skills, explore new opportunities, and stay ahead in a competitive job market.
                </p>
                <div className="about-button-container">
                    <button className="secondary-button">Learn More</button>
                    
                </div>
            </div>
        </div>
    );

};
export default About;