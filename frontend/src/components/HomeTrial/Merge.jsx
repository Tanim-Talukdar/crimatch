import Hero from './Hero';
import CompanyLogo from './CompanyLogo';
import PurposeSection from './PurposeSection';
import FeaturesSection from './FeaturesSection';
import ScheduleSection from './ScheduleSection';
import MonitorSection from './MonitorSection';
import PricingSection from './PricingSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';

function Merge() {
  return (
    <main className="position-relative min-vh-100">
      <div className="overflow-hidden">
        <br />
        <Hero />
        <br />
        <CompanyLogo/>
        <PurposeSection />
         <br />
        <FeaturesSection />
         <br />
        <ScheduleSection />
        <br />
        <MonitorSection />
        <br />
        {/* <PricingSection /> */}
        <br />
        <ServicesSection />
        <br />
        <TestimonialsSection />
        <br />
      </div>
    </main>
  );
}

export default Merge;
