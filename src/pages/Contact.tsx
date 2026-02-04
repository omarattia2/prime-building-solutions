import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { companyInfo } from '@/data/siteData';
import useFormStatus from '@/hooks/useFormStatus';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { status, runSubmit, resetStatus } = useFormStatus();
  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSubmit(
      () =>
        new Promise<void>((resolve) => {
          console.log('Contact form submitted:', formData);
          setTimeout(resolve, 800);
        })
    );
  };

  const handleReset = () => {
    setFormData(initialFormData);
    resetStatus();
  };

  const mapQuery = encodeURIComponent(
    `${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.city}, ${companyInfo.address.country}`
  );

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
              Get in Touch
            </h1>
            <p className="body-lg text-primary-foreground/80">
              Have a question or ready to start your project? We're here to help. Reach out and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-foreground mb-6">Contact Information</h2>
              <p className="body-md text-muted-foreground mb-8">
                We're always ready to discuss your project. Reach out through any of the channels below, or fill out the contact form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">{companyInfo.phone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">{companyInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.postalCode} {companyInfo.address.city}<br />
                      {companyInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">
                      {companyInfo.hours.weekdays}<br />
                      {companyInfo.hours.saturday}<br />
                      {companyInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-elevated">
                <h2 className="heading-md text-foreground mb-6">Send us a Message</h2>
                
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="label-field">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="input-field"
                          placeholder="John"
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
                          placeholder="Doe"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="label-field">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="label-field">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                        placeholder="+31 6 12345678"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="label-field">Your Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-field min-h-[120px] resize-y"
                        placeholder="Tell us about your project or question..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <button type="submit" className="btn-hero-primary w-full" disabled={isSubmitting}>
                      <Send className="h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="card-elevated overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border">
              <h2 className="heading-md text-foreground">Find Us</h2>
              <p className="text-muted-foreground">
                {companyInfo.address.street}, {companyInfo.address.postalCode} {companyInfo.address.city}
              </p>
            </div>
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Prime Building Solutions location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
