import React, { useState } from 'react';

const features = [
  { title: 'ROADMAP', description: 'Navigate your career with a customized roadmap, detailing milestones and actionable strategies for success.' },
  { title: 'SKILLS REQUIRED', description: 'Get personalized insights on essential skills to improve your qualifications and job prospects.' },
  { title: 'PROJECT IDEAS', description: 'Find project ideas that resonate with your career ambitions and help you develop expertise in your chosen field.' },
  { title: 'RESUME BUILD', description: 'Design professional resumes that reflect your unique qualifications and help you stand out in the job market.' },
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleSelectItem = (itemName) => {
    setSelectedItem(itemName);
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
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2d3748',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    selectedTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2c5282',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    featuresContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      maxWidth: '70rem',
      width: '100%',
      margin: '0 auto',
    },
    featureCard: {
      backgroundColor: '#e2e8f0',
      padding: '1.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
    },
    featureDescription: {
      fontSize: '1.5rem', // Increased font size for feature description
      fontWeight: 'bold', // Make feature description bold
      color: '#4a5568',
      marginTop: '0.5rem',
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
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>FEATURES</h1>
        {selectedItem && <h2 style={styles.selectedTitle}>{selectedItem}</h2>}
        <div style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <h2>{feature.title}</h2>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.sidebar}>
        <div style={styles.title}>Select Job Role</div>
        <button
          style={styles.toggleButton}
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        {(isExpanded ? roadmapItems : roadmapItems.slice(0, 4)).map((item, index) => (
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
