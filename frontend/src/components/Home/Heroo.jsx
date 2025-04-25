import React from 'react';

const Heroo = () => {
  return (
    <main className="content py-5" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center ">
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0 hero-card">
            <h1>
              Welcome To <br /> My Galaxy
            </h1>
            <p className="description">
              A relentless creative mind fueled by code, robotics, and real-world innovation. I thrive on hands-on challenges, constantly pushing boundaries to turn vision into impact.
            </p>
            <div className="buttons d-flex justify-content-center justify-content-md-start gap-3">
              {/* Button with small size on small screens */}
              <a href="#" className="btn btn-success btn-get-started btn-sm btn-md-lg">Documentation</a>
              <a href="#" className="btn btn-outline-success btn-signing-main btn-sm btn-md-lg">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Heroo;