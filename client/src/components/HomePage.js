import React, { useState } from 'react';

const features = [
  {
    title: 'ROADMAP',
    description: 'Navigate your career with a customized roadmap, detailing milestones and actionable strategies for success.',
  },
  {
    title: 'SKILLS REQUIRED',
    description: 'Get personalized insights on essential skills to improve your qualifications and job prospects.',
  },
  {
    title: 'PROJECT IDEAS',
    description: 'Find project ideas that resonate with your career ambitions and help you develop expertise in your chosen field.',
  },
  {
    title: 'RESUME BUILD',
    description: 'Design professional resumes that reflect your unique qualifications and help you stand out in the job market.',
  },
];

const roadmapItems = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "DevOps" },
  { name: "Full Stack" },
  { name: "AI Engineer" },
  { name: "Data Analyst" },
  { name: "AI and Data Scientist" },
  { name: "Android" },
  { name: "iOS" },
  { name: "UI/UX Designer" },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 1rem',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#2d3748',
      textAlign: 'center',
    },
    subHeading: {
      fontSize: '2rem',
      color: '#718096',
      textAlign: 'center',
      marginBottom: '3rem',
    },
    featuresContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2.5rem',
      maxWidth: '70rem',
      width: '100%',
      padding: '0 2rem',
    },
    featureCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#e2e8f0',
      boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
      borderRadius: '0.5rem',
      width: '100%',
      height: '20rem',
      padding: '2rem',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    featureCardHover: {
      transform: 'scale(1.05)',
    },
    featureTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#2d3748',
    },
    featureDescription: {
      fontSize: '1.5rem',
      color: '#4a5568',
      maxWidth: '90%',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s',
    },
    modalContent: {
      background: '#f7fafc',
      padding: '20px',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '500px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      animation: 'scaleIn 0.3s',
    },
    roadmapButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#a0aec0',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '2rem', // Increased font size
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    },
    roadmapButtonHover: {
      backgroundColor: '#718096',
      transform: 'scale(1.05)',
    },
    closeButton: {
      backgroundColor: '#3182ce', // Blue color for close button
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '15px 30px',
      marginTop: '15px',
      fontSize: '2.5rem', // Increased font size
      transition: 'background-color 0.3s',
      alignSelf: 'flex-end', // Aligns the button to the right
    },
    closeButtonHover: {
      backgroundColor: '#2b6cb0', // Darker blue on hover
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>FEATURES</h1>
      <p style={styles.subHeading}>
        Discover features designed to elevate your career and unlock new opportunities.
      </p>
      <div style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={styles.featureCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = styles.featureCardHover.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={feature.title === 'ROADMAP' ? toggleModal : undefined}
          >
            <h2 style={styles.featureTitle}>{feature.title}</h2>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Roadmap */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={toggleModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Career Roadmap</h2> {/* Increased size for modal title */}
            {roadmapItems.map((item, index) => (
              <button
                key={index}
                style={styles.roadmapButton}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.roadmapButtonHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a0aec0'}
                onClick={() => alert(`You clicked on ${item.name}`)} // Replace this with any specific action you want
              >
                {item.name}
              </button>
            ))}
            <button
              style={styles.closeButton}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.closeButtonHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
