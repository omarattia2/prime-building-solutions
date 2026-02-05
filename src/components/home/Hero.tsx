import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle, ChevronDown } from 'lucide-react';
import { services } from '@/data/siteData';
import heroBackground from '@/assets/hero section/hero.webp';
import useFormStatus from '@/hooks/useFormStatus';

const initialFormData = {
  name: '',
  contact: '',
  service: '',
};

const Hero = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { status, runSubmit, resetStatus } = useFormStatus();
  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSubmit(
      () =>
        new Promise<void>((resolve) => {
          console.log('Quote form submitted:', formData);
          setTimeout(resolve, 800);
        })
    );
  };

  const handleReset = () => {
    setFormData(initialFormData);
    resetStatus();
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container-wide relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-display text-foreground mb-6">
              Premium Architecture{' '}
              <span className="text-gradient-brand">Built to Perfection</span>
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-xl">
              Transforming visions into extraordinary spaces with precision, innovation, and timeless design.
            </p>

            {/* Promise bar */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                'Free, no-obligation quote',
                'Response within 24 hours',
                'One point of contact',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/quote" className="btn-hero-primary">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={scrollToProjects}
                className="btn-hero-primary"
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-elevated max-w-md mx-auto lg:ml-auto">
              <h3 className="heading-md text-foreground mb-2">
                Free, no-obligation quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Tell us briefly about your project — we'll handle the rest.
              </p>

              {isSuccess ? (
                <div className="py-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground mb-6">We will contact you within 24 hours.</p>
                  <button type="button" onClick={handleReset} className="btn-hero-primary w-full">
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="label-field">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="label-field">Email or Phone</label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="input-field"
                      placeholder="Email or phone number"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="label-field">Service</label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="input-field appearance-none pr-10"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <button type="submit" className="btn-hero-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request My Free Quote'}
                  </button>
                </form>
              )}

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Response within 24 hours • No obligation
              </p>
              <p className="text-xs text-muted-foreground mt-2 text-center border-t border-border pt-4">
                Serving Rotterdam & surrounding areas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
