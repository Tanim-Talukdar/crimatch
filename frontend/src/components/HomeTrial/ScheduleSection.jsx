import scheduleImage from '../../assets/stats.webp'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="container py-5 py-md-6"
    >
      <div className="row align-items-center gx-5 gy-4">
        {/* Left side - Image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="col-12 col-md-6"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="Statistics dashboard" 
            className="img-fluid"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="col-12 col-md-6"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-warning fw-semibold"
          >
            SCHEDULE
          </motion.span>
          <motion.h2 
            variants={textVariant(0.5)}
            className="h3 h-md-2 fw-bold text-dark mt-3 mb-4"
          >
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-secondary mb-4"
          >
            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
          </motion.p>
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#" 
            className="text-success fw-semibold d-flex align-items-center gap-2 transition"
            style={{ transition: 'gap 0.3s ease' }}
          >
            Explore scheduling features
            <motion.svg 
              variants={fadeIn('left', 0.8)}
              className="ms-2" 
              width="20" height="20"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleSection;
