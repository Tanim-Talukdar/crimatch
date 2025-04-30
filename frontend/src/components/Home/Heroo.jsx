import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Heroo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease', // Animation easing
      once: true, // Only run animation once when the element comes into view
    });
  }, []);

  return (
    <main
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: 'url("https://www.recyclefromhome.com/wp-content/uploads/2021/02/main-hero-prepped.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay content with background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Apply dark overlay with low opacity
          zIndex: 0,
        }}
      />

      {/* Content Section */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          color: '#ffffff',
          textAlign: 'center',
          padding: '20px',
          width: '90%',
          maxWidth: '600px',
          backdropFilter: 'blur(10px)', // Add blur effect to the box
          borderRadius: '10px', // Round the corners of the box
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the box
        }}
        data-aos="fade-up"
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#00b894',
          }}
          data-aos="fade-left"
        >
          Crimatch
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }} data-aos="fade-right">
          Recycle smart, live better. Join us in the mission to reduce waste and promote sustainability through innovative recycling solutions.
          We offer a wide range of eco-friendly products made from recycled materials. Make a positive impact today by choosing sustainable options.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Button
            sx={{
              color: '#ffffff',
              backgroundColor: '#00b894',
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00a383',
              },
            }}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Login
          </Button>

          <Button
            sx={{
              color: '#ffffff',
              border: '1px solid #00b894',
              background: 'transparent',
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00b894',
                color: '#ffffff',
                border: '2px solid #00a383',
              },
            }}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Register
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Heroo;
