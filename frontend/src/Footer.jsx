import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-5" style={{ backgroundColor: "rgba(22, 28, 45, 1)", borderTop: "2px solid #bbb", paddingBottom: "60px" }}>
      <div className="container mt-4">
        <div className="row mt-5 text-md-start">

          {/* Logo and copyright */}
          <div className="col-12 col-md-3 mb-4" data-aos="fade-right">
            <h1>
              <Link className="navbar-brand clr" to="/">Crimatch</Link>
            </h1>
            <p style={{ color: "#9e9e9e" }}>&copy; 2024 - 2025, Crimatch. All rights reserved.</p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3 mb-4" data-aos="fade-up">
            <h5 className='clr'>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Crimatch.tech</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Crimatch Cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-3 mb-4" data-aos="fade-up">
            <h5 className='clr'>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">C-Connect Blog</a></li>
              <li><a href="#">List of Charges</a></li>
              <li><a href="#">Downloads & Resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-12 col-md-3 mb-4" data-aos="fade-left">
            <h5 className='clr'>Account</h5>
            <ul className="list-unstyled">
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
              <li><a href="#">60 Day Challenge</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
