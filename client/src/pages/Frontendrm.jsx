import React from 'react';
// import fullImage from '../images/full-image.jpg'; // Adjust the path to your image

const FrontendRM = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundColor: '#000', // Optional: Add background color if needed
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <img src='/' alt="Full Screen" style={styles.image} />
    </div>
  );
};

export default FrontendRM;
