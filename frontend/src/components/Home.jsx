import React, { useEffect, useState } from 'react';



const Home = () => {
  const [data, setData] = useState([]);

  // Mock fetching data from your database
  useEffect(() => {
    // Simulating a database fetch
    const fetchData = async () => {
      const response = await fetch('https://crimatch.onrender.com/api/v1/listings/getAllListings'); // Replace with actual endpoint
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main className="content" >
      <div  className='text-box'>
        <h1>
          Welcome To <br /> My Galaxy
        </h1>
        <p className="description">
          A relentless creative mind fueled by code, robotics, and real-world innovation. I thrive on hands-on challenges, constantly pushing boundaries to turn vision into impact.
        </p>
        <div className="buttons">
          <a href="#" className=" btn btn-success btn-get-started">Documentation</a>
          <a href="#" className="btn-signing-main">Get Started</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
