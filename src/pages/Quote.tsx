import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/siteData';
import useFormStatus from '@/hooks/useFormStatus';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  projectDescription: '',
  timeline: '',
  budget: '',
};

const Quote = () => {
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-display text-primary-foreground mb-6">
              Request a Free Quote
            </h1>
            <p className="body-lg text-primary-foreground/80 mb-6">
              Tell us about your project and we'll provide a detailed, no-obligation quote within 3 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Free & no obligation', '24-hour response', 'Detailed breakdown'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-primary-foreground/80">
                  <Check className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-elevated"
          >
            {isSuccess ? (
              <div className="py-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">We will contact you within 24 hours.</p>
                <button type="button" onClick={handleReset} className="btn-hero-primary w-full sm:w-auto">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="label-field">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="label-field">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="label-field">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-field">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="label-field">Service Needed</label>
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
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="label-field">Project Description</label>
                  <textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="input-field min-h-[120px] resize-y"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="timeline" className="label-field">Preferred Timeline</label>
                    <div className="relative">
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="input-field appearance-none pr-10"
                        disabled={isSubmitting}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6+months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budget" className="label-field">Estimated Budget</label>
                    <div className="relative">
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="input-field appearance-none pr-10"
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget range</option>
                        <option value="under10k">Under €10,000</option>
                        <option value="10k-25k">€10,000 - €25,000</option>
                        <option value="25k-50k">€25,000 - €50,000</option>
                        <option value="50k-100k">€50,000 - €100,000</option>
                        <option value="100k+">€100,000+</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-hero-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours and provide a detailed quote within 3 business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
