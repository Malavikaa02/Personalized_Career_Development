import React from 'react';
import { useNavigate } from 'react-router-dom';
import roadmapImage from '../images/roadmap.jpg';
import skillsImage from '../images/skills.jpg';
import projectsImage from '../images/project.avif';
import resumeImage from '../images/resume.avif';
import { Navigationinner } from "../components/navigationinner";

const features = [
  {
    title: 'ROADMAP',
    description: 'Navigate your career with a customized roadmap, detailing milestones and actionable strategies for success.',
    imageUrl: roadmapImage,
  },
  {
    title: 'SKILLS REQUIRED',
    description: 'Get personalized insights on essential skills to improve your qualifications and job prospects.',
    imageUrl: skillsImage,
  },
  {
    title: 'PROJECT IDEAS',
    description: 'Find project ideas that resonate with your career ambitions and help you develop expertise in your chosen field.',
    imageUrl: projectsImage,
  },
  {
    title: 'RESUME BUILD',
    description: 'Design professional resumes that reflect your unique qualifications and help you stand out in the current job market.',
    imageUrl: resumeImage,
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnMore = (featureTitle) => {
    const route = `/${featureTitle.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(route);
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 1rem',
    },
    featuresContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '7.5rem',
      maxWidth: '80rem',
      width: '100%',
    },
    featureCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      transition: 'transform 0.3s',
      cursor: 'pointer',
      maxHeight: '400px',
    },
    featureImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      maxHeight: '180px',
    },
    featureContent: {
      padding: '1.5rem',
    },
    featureTitle: {
      marginTop: '1.2rem',
      fontSize: '1.7rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '0.5rem',
    },
    featureDescription: {
      fontSize: '1.2rem',
      color: '#4a5568',
      marginBottom: '1rem',
    },
    featureButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      border: 'none',
      padding: '8px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      margin: '0 auto',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <>
      <Navigationinner title={"HOME"}/>
      <div style={styles.container}>
        <div style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <img src={feature.imageUrl} alt={feature.title} style={styles.featureImage} />
              <div style={styles.featureContent}>
                <h2 style={styles.featureTitle}>{feature.title}</h2>
                <p style={styles.featureDescription}>{feature.description}</p>
                <button style={styles.featureButton} onClick={() => handleLearnMore(feature.title)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
