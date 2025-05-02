import slack from '../../assets/slack.png';
import amazon from '../../assets/amazon.png';
import woocommerce from '../../assets/woocommerce.png';

import sitepoint from '../../assets/sitepoint.png';


const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce,  sitepoint];

  return (
    <div className="w-100 container py-5 overflow-hidden d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
      <div className="px-4 text-secondary border-start border-4 border-success bg-white py-2 z-1 mb-4 mb-sm-0" style={{ minWidth: '300px', fontSize: '1.25rem', fontWeight: '600' }}>
        Proud partner at <br /> Crimatch
      </div>
      <div className="d-flex marquee-wrapper">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-4"
            style={{
              height: '2rem',
              width: '9rem',
              objectFit: 'contain',
              filter: 'grayscale(1)',
              opacity: 0.7,
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(1)';
              e.currentTarget.style.opacity = '0.7';
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
