import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Recylable Plastics",
      description: "A short one stop place to find all kinds of recylable plastics such as PET, LDPE, HDPE."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "At your foosteps within one call",
      description: "With one short call, we will deliver anytime and anywhere within the shortest time possible."
    }
  ];

  return (
    <section id="about" className="w-100 bg-light py-5 py-md-16 px-4 px-md-8">
      <div className="container">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="row row-cols-1 row-cols-md-3 justify-content-between gap-5"
        >
          <motion.div variants={fadeIn('right', 0.3)} className="col">
            {/* <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              SERVIES
            </motion.div> */}
            <motion.h2 
              variants={textVariant(0.5)}
              className="h3 md:w-80 md:text-4xl font-bold text-dark"
            >
              SERVICES
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-12 col-md-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="d-flex align-items-start gap-3"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 d-flex align-items-center justify-content-center rounded-lg border"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="h5 font-weight-semibold text-dark mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-muted"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
