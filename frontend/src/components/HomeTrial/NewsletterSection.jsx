import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="section-container px-4 px-md-0">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative px-6 py-16 md:px-16 md:py-24">
          {/* Background Gradient */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-50 h-full bg-blue-700 clip-path-slant hidden md-block"
          ></motion.div>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 gap-md-5">
            {/* Left Content */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              className="text-white text-center text-md-start max-w-lg"
            >
              <motion.h2 
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
              >
                Subscribe to our newsletter
              </motion.h2>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                className="text-blue-100 text-sm sm:text-base"
              >
                Best cooks and best delivery guys all at your service. Hot tasty food.
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              className="w-100 w-md-auto"
            >
              <motion.div 
                variants={fadeIn('up', 0.6)}
                className="d-flex flex-column flex-sm-row gap-3 gap-sm-0"
              >
                <motion.input
                  variants={fadeIn('right', 0.7)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-100 w-sm-auto md-w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
                <motion.button 
                  variants={fadeIn('left', 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-100 w-sm-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-colors d-flex align-items-center justify-content-center sm:justify-content-start gap-2"
                >
                  <span>Discover</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  )
}

export default NewsletterSection;
