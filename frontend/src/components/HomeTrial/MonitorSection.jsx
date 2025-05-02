import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../../assets/monitor-card.webp';

const MonitorSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container py-5 py-md-6 px-3"
    >
      <div className="row align-items-center gx-4 gy-5">
        {/* Left side - Content */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="col-12 col-md-6"
        >
{/*           <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-success fw-semibold"
          >
            PURPOSE
          </motion.span> */}
          <motion.h2 
            variants={textVariant(0.5)}
            className="h3 h-md-2 fw-bold text-dark mt-3 mb-4"
          >
           PURPOSE 
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-muted mb-4"
          >
            This website was created with the purpose of reducing scams and prices. It takes the rough process of having plastic recycled through several hands and simplifies it down to one company and customer
          
          </motion.p>
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#" 
            className="text-success fw-semibold d-flex align-items-center gap-2"
            style={{ transition: 'gap 0.3s ease' }}
          >
            Learn more about monitoring
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

        {/* Right side - Swiper with background */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="col-12 col-md-6 position-relative"
        >
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="p-3"
          >
            <motion.img 
              variants={fadeIn('up', 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="img-fluid rounded"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
