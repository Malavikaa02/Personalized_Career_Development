import React from 'react';
import Devops from '../images/roadmaps/devops_page-0001.jpg'

// import fullImage from '../images/full-image.jpg'; // Adjust the path to your image

const DevopsRM = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // Align to the top for scrolling
      height: '100vh',
      width: '100vw',
      overflowY: 'scroll', // Enable vertical scrolling
      backgroundColor: '#000', // Optional: Add background color if needed
      margin: 0,
      padding: 0,
    },
    image: {
      width: '100%',      // Make the image fit the width of the viewport
      height: 'auto',     // Maintain aspect ratio
    },
  };

  return (
    <div style={styles.container}>
      <img src={Devops} alt="Full Screen" style={styles.image} />
    </div>
  );
};

export default DevopsRM;