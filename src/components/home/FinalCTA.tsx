import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

const FinalCTA = () => {
  return (
    <section className="section-padding gradient-brand relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-xl text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="body-lg text-primary-foreground/80 mb-8">
            Get started with a free, no-obligation consultation. Our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quote" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg transition-all hover:bg-primary-foreground/90 hover:shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg transition-all hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-6">
            Free consultation • Response within 24 hours • No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
