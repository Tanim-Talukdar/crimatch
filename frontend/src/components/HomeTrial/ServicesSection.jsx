import React from 'react';
import { BsStack } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design & Web Devlopment",
      description: "The website is created through Mern Stack including Frontend and backend.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Quality Assurance", 
      description: "Our plants are run by expert Quality Assaurance Officers, who take great care when letting the product throught the production line",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "The website comes with an AI to help with client needs. Although, it is in a primal form but will be developed over time",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "QUO = 2, Development = 6, Designing = 2, PR Secretary = 3 .",
      link: "#learn-more"
    }
  ];

  return (
    <section id="services" className="py-5 container">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className='row align-items-center gy-5'
      >
        {/* Left Header Section */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="col-md-4"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="h3 fw-bold mb-4"
          >
            Features of our company
          </motion.h2>
          {/* <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-muted mb-3"
          >
            Discuss your goals, determine success metrics, identify problems
          </motion.p> */}

          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="mb-4"
          >
            {["UX design content strategy", "Development bring"].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn('right', 0.7 + i * 0.1)}
                className="d-flex align-items-center mb-2"
              >
                <div className="rounded-circle bg-indigo-100 d-flex align-items-center justify-content-center me-2" style={{width: '20px', height: '20px'}}>
                  <div className="bg-indigo-600 rounded-circle" style={{width: '10px', height: '10px'}}></div>
                </div>
                <span className="text-muted">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary rounded-pill px-4 py-2"
          >
            Get started
          </motion.button> */}
        </motion.div>

        {/* Right Grid Section */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="col-md-8"
        >
          <div className="row gy-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                whileHover={{ scale: 1.05 }}
                className="col-md-6"
              >
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  <motion.div 
                    variants={fadeIn('down', 0.4 * (index + 1))}
                    className="mb-3"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="h5 fw-semibold mb-2"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    className="text-muted mb-3"
                  >
                    {service.description}
                  </motion.p>
                  {/* <motion.a 
                    variants={fadeIn('up', 0.6 * (index + 1))}
                    href={service.link}
                    className="text-primary fw-medium"
                  >
                    LEARN MORE
                  </motion.a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
