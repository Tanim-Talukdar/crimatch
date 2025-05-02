import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import heroImage from '../../assets/niggaballs.avif';

const Hero = () => {
  return (
    <section id="home" className="container px-4 py-16 py-md-24">
      <div className="row align-items-center justify-content-between">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
            {/* Star badge */}
            <div className="d-flex align-items-center gap-2 bg-light p-2 rounded-pill hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-success">★</span>
              <span className="small font-medium">Recyling, for a sustainable future</span>
            </div>
            <br />
            <br />
          </motion.div>

          <motion.h1 
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="display-3 font-weight-bold mt-4 mb-4"
          >
            <span className="text-success position-relative d-inline-block">Crimatch,</span> your need is our purpose{' '}
            <span className="d-inline-block ml-2 animate-pulse">♻️</span>
          </motion.h1>
          <br />
          <br />
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-muted lead mb-4"
          >
            Get the cheapest plastic, save time and resources while cutting out the middle men - all within one simple process.
          </motion.p>
         <br />
         <br />
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="d-flex gap-3"
          >
            {/* Email Form */}
            <input
              type="email"
              placeholder="Email address"
              className="form-control form-control-lg border-gray-200 rounded-pill"
            />
            <button className="btn btn-outline-success btn-lg rounded-pill">
              →
            </button>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          className="col-12 col-md-6 mt-4 mt-md-0"
        >
          <div className="position-relative">
            <img
              src={heroImage}
              alt="Team meeting"
              className="img-fluid rounded-lg position-relative z-10 hover-zoom transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
