import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/siteData';

import projectKitchen from '@/assets/project-kitchen.jpg';
import projectBathroom from '@/assets/project-bathroom.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectExtension from '@/assets/project-extension.jpg';
import projectOutdoor from '@/assets/project-outdoor.jpg';
import projectOffice from '@/assets/project-office.jpg';

const serviceImages: Record<string, string> = {
  'bathroom-renovations': projectBathroom,
  'kitchen-remodeling': projectKitchen,
  'full-home-renovations': projectLiving,
  'home-extensions': projectExtension,
  'outdoor-living': projectOutdoor,
  'commercial-fitouts': projectOffice,
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-brand section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="body-lg text-primary-foreground/80">
              From bathroom renovations to complete home transformations, we offer comprehensive building and renovation services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-elevated h-full flex flex-col">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                    <img
                      src={serviceImages[service.slug]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                    {service.category}
                  </span>
                  
                  <h3 className="heading-md text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {service.shortDescription}
                  </p>

                  <div className="flex gap-3 mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/quote"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary/5">
        <div className="container-wide text-center">
          <h2 className="heading-lg text-foreground mb-4">
            Not sure which service you need?
          </h2>
          <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you determine the best approach for your project.
          </p>
          <Link to="/consultation" className="btn-hero-primary">
            Book Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
