/*import React from 'react'

const Work = () => {
    const workInfoData = [
        {
            title: "Personalized Assessment",
            text: "Our platform begins by assessing your current skills, experience, and career goals through a comprehensive questionnaire. ",
        },
        {
            title: "AI-Driven Insights",
            text: "Leveraging advanced algorithms, our AI analyzes your profile and the job market to provide actionable insights.",
        },
        {
            title: "Continuous Support",
            text: "We believe in ongoing growth and development. Our platform offers continuous support with regular check-ins, updated resources, and feedback on your progress. ",
        },
    ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>
            Your Pathway to Career Success!
            </p>


        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data,index)=> (
                    <div className='work-section-info' key={index}>   
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>    
            ))}
        </div>
    </div>
  );
};

export default Work;*/
import React, { useEffect } from 'react';

const Work = () => {
    const workInfoData = [
        {
            title: "Personalized Assessment",
            text: "Our platform begins by assessing your current skills, experience, and career goals through a comprehensive questionnaire.",
        },
        {
            title: "AI-Driven Insights",
            text: "Leveraging advanced algorithms, our AI analyzes your profile and the job market to provide actionable insights.",
        },
        {
            title: "Continuous Support",
            text: "We believe in ongoing growth and development. Our platform offers continuous support with regular check-ins, updated resources, and feedback on your progress.",
        },
    ];

    useEffect(() => {
        const infoElements = document.querySelectorAll('.work-section-info');
        infoElements.forEach((el) => {
            el.style.opacity = 1; // Set opacity to 1 for visibility
            el.classList.add('fade-in'); // Add fade-in class for animation
        });
    }, []); // Empty dependency array to run on mount only

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>
                    Your Pathway to Career Success!
                </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data, index) => (
                    <div className='work-section-info' key={index}>   
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>    
                ))}
            </div>
        </div>
    );
};

export default Work;
