import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
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
    <main style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Spline 3D Background */}
      <Spline
        scene="https://prod.spline.design/X0hZYbmMonh-MXhv/scene.splinecode"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Overlay Content on Left */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: '#ffffff',
          textAlign: 'left',
          padding: '20px 30px',
          maxWidth: '400px',
          width: '90%', // Ensure it fits on smaller screens
        }}
        data-aos="fade-up" // Animation when the content scrolls into view
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#00b894',
          }}
          data-aos="fade-left" // Animation for the header text
        >
          Crimatch
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }} data-aos="fade-right">
          Recycle smart, live better.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '20px',
          }}
        >
          <button 
            sx={{
              color: '#ffffff',
              backgroundColor: '#00b894', // Bluish background
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00a383', // Darker shade on hover
              },
            }}
            data-aos="zoom-in" // Button animation
            data-aos-delay="300" // Delay animation for staggered effect
          >
            Login
          </button>

          <button 
            sx={{
              color: '#ffffff',
              border: '1px solid #00b894', // Bluish border
              background: 'transparent',
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00b894', // Bluish background on hover
                color: '#ffffff', // White text on hover
                border: '2px solid #00a383', // Darker bluish border on hover
              },
            }}
            data-aos="zoom-in" // Button animation
            data-aos-delay="500" // Staggered delay for the second button
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
};

export default Heroo;
