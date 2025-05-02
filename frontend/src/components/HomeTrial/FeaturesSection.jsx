import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We've got a large catalog of plastics to chosen from. Select any at your own convenience."
    },
    // {
    //   icon: "⚙️",
    //   title: "Work out the details", 
    //   description: "Communication protocols apart from engagement models"
    // },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "For emergency deliveries, we will even deliver a revolution to you."
    }
  ];

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="container py-16"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="display-4 font-weight-bold mb-4"
        >
          How can we help your business?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-muted lead"
        >
          When we resell materials, we build trust and increase sustainability
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="row row-cols-1 row-cols-md-3 gap-4 justify-content-between"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="col d-flex flex-column align-items-center p-4"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className={`w-24 h-24 rounded-circle mb-4 d-flex align-items-center justify-content-center`}
              style={{ 
                backgroundColor: index === 0 ? '#F1EFFD' : 
                                index === 1 ? '#FFE7E7' : 
                                '#FFF3E4'
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="fs-3"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="h5 font-weight-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-muted text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-5"
      >
        <motion.button 

          className="btn btn-outline-success px-5 py-3 rounded-pill font-weight-medium"
        >
          Become a member
          <div className="position-absolute top-0 left-0 w-100 h-100 rounded-circle bg-blue-600 opacity-25 blur-xl"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default FeaturesSection;
