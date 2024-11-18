import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roadmapImage from '../images/roadmap.jpg';
import skillsImage from '../images/skills.jpg';
import projectsImage from '../images/project.avif';
import resumeImage from '../images/resume.avif';
import selectJobRoleImage from '../images/select-job-image.jpg'; // Add an image for "select job role" state

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

const roadmapItems = [
  { name: 'FRONTEND' },
  { name: 'BACKEND' },
  { name: 'DEVOPS' },
  { name: 'FULL STACK' },
  { name: 'AI ENGINEERING' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleSelectItem = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleLearnMore = () => {
    if (selectedItem) {
      const route = `/${selectedItem.toLowerCase().replace(/\s+/g, '-')}-rm`;
      navigate(route);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
    },
    content: {
      flex: 1,
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2d3748',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    selectedTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    featuresContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '7.5rem',
      maxWidth: '80rem',
      width: '100%',
      margin: '0 auto',
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
    sidebar: {
      width: '250px',
      backgroundColor: '#e2e8f0',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: '1.9rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    toggleButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '1rem',
      marginBottom: '1rem',
      alignSelf: 'flex-start',
    },
    roadmapButton: {
      backgroundColor: '#a0aec0',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '0.5rem',
      cursor: 'pointer',
      width: '100%',
      textAlign: 'left',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    roadmapButtonSelected: {
      backgroundColor: '#3182ce',
      fontSize: '1rem',
    },
    noSelectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop:'70px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center',
      backgroundColor: '#fff', // White background
      padding: '2rem', // Padding for spacing
      borderRadius: '10px', // Rounded corners
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for pop-up effect
      maxWidth: '500px', // Optional: limit the container width
      maxHeight: '600px' // Center the container horizontally
    },
    noSelectionImage: {
      width: '500px', // Adjust size as needed
      height: '400px',
      marginBottom: '1rem',
    },
    noSelectionText: {
      fontSize: '2.5rem',
      color: '#4a5568',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {selectedItem ? (
          <>
            <h1 style={styles.selectedTitle}>{selectedItem}</h1>
            <h2 style={styles.heading}>FEATURES</h2>
            <br />
            <div style={styles.featuresContainer}>
              {features.map((feature, index) => (
                <div key={index} style={styles.featureCard}>
                  <img src={feature.imageUrl} alt={feature.title} style={styles.featureImage} />
                  <div style={styles.featureContent}>
                    <h2 style={styles.featureTitle}>{feature.title}</h2>
                    <p style={styles.featureDescription}>{feature.description}</p>
                    <button style={styles.featureButton} onClick={handleLearnMore}>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={styles.noSelectionContainer}>
            <img src={selectJobRoleImage} alt="Select Job Role" style={styles.noSelectionImage} />
            <p style={styles.noSelectionText}>Please select any of the job roles to view details.</p>
          </div>
        )}
      </div>
      <div style={styles.sidebar}>
        <div style={styles.title}>Select Job Role</div>
        <button style={styles.toggleButton} onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        {(isExpanded ? roadmapItems : roadmapItems.slice(0, 5)).map((item, index) => (
          <button
            key={index}
            style={{
              ...styles.roadmapButton,
              ...(selectedItem === item.name ? styles.roadmapButtonSelected : {}),
            }}
            onClick={() => handleSelectItem(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
